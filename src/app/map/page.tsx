'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import { Sighting } from '@/types';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg h-96 flex items-center justify-center">
      <div className="text-center">
        <MapPin className="h-16 w-16 text-[#AB0520] mx-auto mb-4" />
        <p className="text-amber-700">Loading map...</p>
      </div>
    </div>
  )
});

// Mock data for sightings
const mockSightings: Sighting[] = [
  {
    id: '1',
    birdId: 'gambels-quail',
    birdName: 'Gambel\'s Quail',
    date: new Date('2024-03-15'),
    location: {
      lat: 32.2319,
      lng: -110.9501,
      name: 'Old Main Lawn'
    },
    photo: undefined,
    notes: 'Saw a covey of quail foraging on the ground near the desert garden. Males with distinctive black faces.',
    userId: 'user1',
    userName: 'Xin',
    isApproved: true,
    createdAt: new Date('2024-03-15T10:30:00')
  },
  {
    id: '2',
    birdId: 'cactus-wren',
    birdName: 'Cactus Wren',
    date: new Date('2024-03-14'),
    location: {
      lat: 32.2325,
      lng: -110.9495,
      name: 'Desert Garden'
    },
    photo: undefined,
    notes: 'Arizona\'s state bird! Heard its distinctive chattering call and saw it building a nest in a saguaro.',
    userId: 'user2',
    userName: 'Sarah',
    isApproved: true,
    createdAt: new Date('2024-03-14T14:15:00')
  },
  {
    id: '3',
    birdId: 'annas-hummingbird',
    birdName: 'Anna\'s Hummingbird',
    date: new Date('2024-03-13'),
    location: {
      lat: 32.2330,
      lng: -110.9480,
      name: 'Student Union Garden'
    },
    photo: undefined,
    notes: 'Bright pink-throated male hummingbird feeding at the flower beds. Performed a spectacular dive display!',
    userId: 'user3',
    userName: 'Mike',
    isApproved: true,
    createdAt: new Date('2024-03-13T08:45:00')
  },
  {
    id: '4',
    birdId: 'house-sparrow',
    birdName: 'House Sparrow',
    date: new Date('2024-03-12'),
    location: {
      lat: 32.2340,
      lng: -110.9470,
      name: 'Parking Garage A'
    },
    photo: undefined,
    notes: 'Small flock of sparrows foraging around the parking garage entrance.',
    userId: 'user4',
    userName: 'Emma',
    isApproved: true,
    createdAt: new Date('2024-03-12T16:20:00')
  },
  {
    id: '5',
    birdId: 'mourning-dove',
    birdName: 'Mourning Dove',
    date: new Date('2024-03-11'),
    location: {
      lat: 32.2300,
      lng: -110.9510,
      name: 'Library Walk'
    },
    photo: undefined,
    notes: 'Peaceful dove perched on a wire, cooing softly in the morning.',
    userId: 'user5',
    userName: 'David',
    isApproved: true,
    createdAt: new Date('2024-03-11T09:15:00')
  }
];

export default function MapPage() {
  const [selectedBird, setSelectedBird] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSighting, setSelectedSighting] = useState<Sighting | null>(null);

  // Filter sightings
  const filteredSightings = mockSightings.filter(sighting => {
    const matchesBird = selectedBird === 'all' || sighting.birdId === selectedBird;
    const matchesDate = !selectedDate || sighting.date.toDateString() === new Date(selectedDate).toDateString();
    return matchesBird && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0C234B] mb-4">Interactive Map</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore bird sightings across the University of Arizona campus. 
              Click on pins to see details about each observation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Bird Filter */}
            <div className="lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Bird</label>
              <select
                value={selectedBird}
                onChange={(e) => setSelectedBird(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
              >
                <option value="all">All Birds</option>
                <optgroup label="Year-Round Residents">
                  <option value="gambels-quail">Gambel's Quail</option>
                  <option value="mourning-dove">Mourning Dove</option>
                  <option value="rock-pigeon">Rock Pigeon</option>
                  <option value="eurasian-collared-dove">Eurasian Collared-Dove</option>
                  <option value="inca-dove">Inca Dove</option>
                  <option value="annas-hummingbird">Anna's Hummingbird</option>
                  <option value="costas-hummingbird">Costa's Hummingbird</option>
                  <option value="gila-woodpecker">Gila Woodpecker</option>
                  <option value="gilded-flicker">Gilded Flicker</option>
                  <option value="ladder-backed-woodpecker">Ladder-backed Woodpecker</option>
                  <option value="great-horned-owl">Great Horned Owl</option>
                  <option value="western-screech-owl">Western Screech-Owl</option>
                  <option value="coopers-hawk">Cooper's Hawk</option>
                  <option value="harriss-hawk">Harris's Hawk</option>
                  <option value="red-tailed-hawk">Red-tailed Hawk</option>
                  <option value="american-kestrel">American Kestrel</option>
                  <option value="great-tailed-grackle">Great-tailed Grackle</option>
                  <option value="brown-headed-cowbird">Brown-headed Cowbird</option>
                  <option value="house-finch">House Finch</option>
                  <option value="lesser-goldfinch">Lesser Goldfinch</option>
                  <option value="house-sparrow">House Sparrow</option>
                  <option value="european-starling">European Starling</option>
                  <option value="northern-mockingbird">Northern Mockingbird</option>
                  <option value="curve-billed-thrasher">Curve-billed Thrasher</option>
                  <option value="verdin">Verdin</option>
                  <option value="phainopepla">Phainopepla</option>
                  <option value="cactus-wren">Cactus Wren</option>
                </optgroup>
                <optgroup label="Summer Breeders">
                  <option value="white-winged-dove">White-winged Dove</option>
                  <option value="hooded-oriole">Hooded Oriole</option>
                  <option value="brown-crested-flycatcher">Brown-crested Flycatcher</option>
                  <option value="western-kingbird">Western Kingbird</option>
                  <option value="black-chinned-hummingbird">Black-chinned Hummingbird</option>
                  <option value="broad-billed-hummingbird">Broad-billed Hummingbird</option>
                  <option value="lucys-warbler">Lucy's Warbler</option>
                  <option value="bells-vireo">Bell's Vireo</option>
                  <option value="summer-tanager">Summer Tanager</option>
                  <option value="swainsons-hawk">Swainson's Hawk</option>
                  <option value="lesser-nighthawk">Lesser Nighthawk</option>
                  <option value="turkey-vulture">Turkey Vulture</option>
                </optgroup>
                <optgroup label="Winter Visitors">
                  <option value="yellow-rumped-warbler">Yellow-rumped Warbler</option>
                  <option value="white-crowned-sparrow">White-crowned Sparrow</option>
                  <option value="dark-eyed-junco">Dark-eyed Junco</option>
                  <option value="ruby-crowned-kinglet">Ruby-crowned Kinglet</option>
                  <option value="hermit-thrush">Hermit Thrush</option>
                  <option value="red-naped-sapsucker">Red-naped Sapsucker</option>
                  <option value="sandhill-crane">Sandhill Crane</option>
                  <option value="lincolns-sparrow">Lincoln's Sparrow</option>
                  <option value="cedar-waxwing">Cedar Waxwing</option>
                  <option value="merlin">Merlin</option>
                  <option value="yellow-headed-blackbird">Yellow-headed Blackbird</option>
                </optgroup>
                <optgroup label="Migrants">
                  <option value="wilsons-warbler">Wilson's Warbler</option>
                  <option value="western-tanager">Western Tanager</option>
                  <option value="rufous-hummingbird">Rufous Hummingbird</option>
                  <option value="lazuli-bunting">Lazuli Bunting</option>
                  <option value="macgillivrays-warbler">MacGillivray's Warbler</option>
                  <option value="olive-sided-flycatcher">Olive-sided Flycatcher</option>
                  <option value="barn-swallow">Barn Swallow</option>
                  <option value="osprey">Osprey</option>
                </optgroup>
                <optgroup label="Rare/Exotic Species">
                  <option value="streak-backed-oriole">Streak-backed Oriole</option>
                  <option value="rufous-backed-robin">Rufous-backed Robin</option>
                  <option value="rosy-faced-lovebird">Rosy-faced Lovebird</option>
                  <option value="black-vented-oriole">Black-vented Oriole</option>
                  <option value="aztec-thrush">Aztec Thrush</option>
                  <option value="rufous-capped-warbler">Rufous-capped Warbler</option>
                </optgroup>
              </select>
            </div>

            {/* Date Filter */}
            <div className="lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
              />
            </div>

            {/* Clear Filters */}
            <div className="lg:w-48 flex items-end">
              <button
                onClick={() => {
                  setSelectedBird('all');
                  setSelectedDate('');
                }}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Map and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#0C234B] mb-2">Campus Bird Sightings</h2>
                <p className="text-gray-600">
                  Showing {filteredSightings.length} of {mockSightings.length} sightings
                </p>
              </div>
              
              <div className="h-96 rounded-lg overflow-hidden">
                <MapComponent 
                  sightings={filteredSightings}
                  onSightingClick={setSelectedSighting}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Sighting Details */}
            {selectedSighting && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-[#0C234B] mb-4">Sighting Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedSighting.birdName}</h4>
                    <p className="text-sm text-gray-600">{selectedSighting.location.name}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedSighting.location.lat.toFixed(4)}, {selectedSighting.location.lng.toFixed(4)}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p><strong>Date:</strong> {selectedSighting.date.toLocaleDateString()}</p>
                    <p><strong>Observer:</strong> {selectedSighting.userName}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">{selectedSighting.notes}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="text-[#AB0520] hover:text-red-800 font-semibold text-sm">
                      View Bird Profile
                    </button>
                    <button className="text-[#AB0520] hover:text-red-800 font-semibold text-sm">
                      Report Similar Sighting
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Sightings List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0C234B] mb-4">Recent Sightings</h3>
              
              <div className="space-y-3">
                {filteredSightings.slice(0, 5).map((sighting) => (
                  <button
                    key={sighting.id}
                    onClick={() => setSelectedSighting(sighting)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedSighting?.id === sighting.id
                        ? 'border-[#AB0520] bg-red-50'
                        : 'border-gray-100 hover:border-[#AB0520] hover:bg-red-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-[#0C234B]">{sighting.birdName}</h4>
                      <span className="text-xs text-gray-500">
                        {sighting.date.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{sighting.location.name}</p>
                  </button>
                ))}
              </div>
              
              {filteredSightings.length === 0 && (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No sightings found</p>
                </div>
              )}
            </div>

            {/* Map Legend */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0C234B] mb-4">Legend</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span>American Robin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span>Cactus Wren</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Northern Cardinal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span>House Sparrow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span>Mourning Dove</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 