'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Sighting } from '@/types';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  sightings: Sighting[];
  onSightingClick: (sighting: Sighting) => void;
}

// Custom icon colors for different bird types
const getBirdIcon = (birdId: string) => {
  const colors: { [key: string]: string } = {
    'american-robin': '#ef4444', // red
    'cactus-wren': '#3b82f6',    // blue
    'northern-cardinal': '#10b981', // green
    'house-sparrow': '#eab308',  // yellow
    'mourning-dove': '#8b5cf6',  // purple
    'gila-woodpecker': '#f97316', // orange
  };

  const color = colors[birdId] || '#6b7280'; // default gray

  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const MapComponent = ({ sightings, onSightingClick }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on University of Arizona
    const map = L.map(mapRef.current).setView([32.2319, -110.9501], 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers for each sighting
    sightings.forEach(sighting => {
      const marker = L.marker(
        [sighting.location.lat, sighting.location.lng],
        { icon: getBirdIcon(sighting.birdId) }
      ).addTo(map);

      // Create popup content
      const popupContent = `
        <div class="p-2">
          <h3 class="font-semibold text-lg mb-1">${sighting.birdName}</h3>
          <p class="text-sm text-gray-600 mb-2">${sighting.location.name}</p>
          <p class="text-xs text-gray-500 mb-2">${sighting.date.toLocaleDateString()}</p>
          <p class="text-sm">${sighting.notes.substring(0, 100)}${sighting.notes.length > 100 ? '...' : ''}</p>
          <button 
            class="mt-2 px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
            onclick="window.sightingClick && window.sightingClick('${sighting.id}')"
          >
            View Details
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
      
      // Add click handler
      marker.on('click', () => {
        onSightingClick(sighting);
      });

      markersRef.current.push(marker);
    });

    // Fit map to show all markers if there are any
    if (sightings.length > 0) {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.1));
    }

  }, [sightings, onSightingClick]);

  // Add global function for popup button clicks
  useEffect(() => {
    (window as unknown as { sightingClick?: (sightingId: string) => void }).sightingClick = (sightingId: string) => {
      const sighting = sightings.find(s => s.id === sightingId);
      if (sighting) {
        onSightingClick(sighting);
      }
    };

    return () => {
      delete (window as unknown as { sightingClick?: (sightingId: string) => void }).sightingClick;
    };
  }, [sightings, onSightingClick]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg"
      style={{ minHeight: '400px' }}
    />
  );
};

export default MapComponent; 