'use client';

import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import BirdCard from '@/components/BirdCard';
import { Bird } from '@/types';

// Mock data for birds
const mockBirds: Bird[] = [
  {
    id: 'american-robin',
    commonName: 'American Robin',
    scientificName: 'Turdus migratorius',
    description: 'A familiar sight on campus lawns, the American Robin is known for its distinctive orange breast and cheerful song. These birds are often seen hopping across grassy areas in search of worms and insects.',
    behavior: 'Ground foragers that hop and pause to listen for prey. Often seen in flocks during migration.',
    vocalizations: 'Clear, melodious song with phrases like "cheerily, cheer up, cheer up, cheerily, cheer up."',
    habitat: 'Open woodlands, gardens, lawns, and urban areas',
    campusRange: 'Common throughout campus, especially in grassy areas and near trees',
    images: [],
    colors: ['orange', 'brown', 'gray'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'house-sparrow',
    commonName: 'House Sparrow',
    scientificName: 'Passer domesticus',
    description: 'A small, social bird that has adapted well to human environments. Often seen in groups around buildings and feeders.',
    behavior: 'Highly social birds that form flocks. They nest in cavities and are often found near human habitation.',
    vocalizations: 'Simple chirps and chatters, with males having a more complex song during breeding season.',
    habitat: 'Urban areas, farms, and human settlements',
    campusRange: 'Abundant around buildings, parking lots, and campus structures',
    images: [],
    colors: ['brown', 'gray', 'black'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'mourning-dove',
    commonName: 'Mourning Dove',
    scientificName: 'Zenaida macroura',
    description: 'A graceful dove with a distinctive mournful cooing call. Often seen perched on wires or foraging on the ground.',
    behavior: 'Ground feeders that walk rather than hop. They often perch on wires and rooftops.',
    vocalizations: 'Soft, mournful cooing: "coo-ah, coo, coo, coo"',
    habitat: 'Open areas, urban environments, and agricultural land',
    campusRange: 'Common throughout campus, especially in open areas and near buildings',
    images: [],
    colors: ['gray', 'brown', 'pink'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'northern-cardinal',
    commonName: 'Northern Cardinal',
    scientificName: 'Cardinalis cardinalis',
    description: 'A striking red bird that stands out against the desert landscape. Males are bright red while females are brown with red accents.',
    behavior: 'Territorial birds that often sing from high perches. They forage on the ground and in shrubs.',
    vocalizations: 'Clear, whistled songs and sharp chip calls. Males sing year-round.',
    habitat: 'Woodlands, gardens, and shrubby areas',
    campusRange: 'Found in wooded areas and gardens throughout campus',
    images: [],
    colors: ['red', 'brown', 'black'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'cactus-wren',
    commonName: 'Cactus Wren',
    scientificName: 'Campylorhynchus brunneicapillus',
    description: 'Arizona\'s state bird, perfectly adapted to desert life. Builds large nests in cacti and has a distinctive chattering call.',
    behavior: 'Active foragers that hop and climb through desert vegetation. They build large, football-shaped nests.',
    vocalizations: 'Harsh, chattering calls and a variety of whistles and trills.',
    habitat: 'Desert scrub, cactus forests, and arid landscapes',
    campusRange: 'Common in desert areas and cactus gardens on campus',
    images: [],
    colors: ['brown', 'white', 'black'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'gila-woodpecker',
    commonName: 'Gila Woodpecker',
    scientificName: 'Melanerpes uropygialis',
    description: 'A desert-adapted woodpecker that excavates nest holes in saguaro cacti. Has a distinctive red cap and barred back.',
    behavior: 'Climbs tree trunks and cacti in search of insects. They excavate nest cavities in saguaros.',
    vocalizations: 'Sharp calls and drumming on trees and cacti.',
    habitat: 'Desert areas with saguaro cacti and mesquite trees',
    campusRange: 'Found in desert areas and around saguaro cacti on campus',
    images: [],
    colors: ['brown', 'red', 'black', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default function BirdsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique colors and seasons for filters
  const allColors = Array.from(new Set(mockBirds.flatMap(bird => bird.colors)));
  const allSeasons = Array.from(new Set(mockBirds.flatMap(bird => bird.seasons)));

  // Filter birds based on search and filters
  const filteredBirds = mockBirds.filter(bird => {
    const matchesSearch = bird.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bird.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSize = selectedSize === 'all' || bird.size === selectedSize;
    
    const matchesColors = selectedColors.length === 0 || 
                         selectedColors.some(color => bird.colors.includes(color));
    
    const matchesSeasons = selectedSeasons.length === 0 || 
                          selectedSeasons.some(season => bird.seasons.includes(season));

    return matchesSearch && matchesSize && matchesColors && matchesSeasons;
  });

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSeason = (season: string) => {
    setSelectedSeasons(prev => 
      prev.includes(season) 
        ? prev.filter(s => s !== season)
        : [...prev, season]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0C234B] mb-4">Bird Directory</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the diverse bird species that call the University of Arizona campus home. 
              From common urban birds to desert specialists, explore our feathered neighbors.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search birds by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[#AB0520] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#AB0520] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 space-y-4">
            {/* Size Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['all', 'small', 'medium', 'large'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-[#AB0520] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size === 'all' ? 'All Sizes' : size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {allColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedColors.includes(color)
                        ? 'bg-[#AB0520] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Season Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Seasons</h3>
              <div className="flex flex-wrap gap-2">
                {allSeasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => toggleSeason(season)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSeasons.includes(season)
                        ? 'bg-[#AB0520] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {season.charAt(0).toUpperCase() + season.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBirds.length} of {mockBirds.length} birds
          </p>
        </div>

        {/* Bird Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBirds.map((bird) => (
              <BirdCard key={bird.id} bird={bird} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBirds.map((bird) => (
              <div key={bird.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 flex-shrink-0">
                    <Bird className="h-12 w-12 text-[#AB0520]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#0C234B] mb-1">{bird.commonName}</h3>
                    <p className="text-gray-600 italic mb-2">{bird.scientificName}</p>
                    <p className="text-gray-700 mb-3">{bird.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {bird.size}
                      </span>
                      {bird.colors.map((color) => (
                        <span 
                          key={color}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredBirds.length === 0 && (
          <div className="text-center py-12">
            <Bird className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No birds found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
} 