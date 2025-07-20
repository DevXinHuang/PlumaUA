'use client';

import { useState } from 'react';
import { Camera, MapPin, Calendar, User, Search, Filter } from 'lucide-react';
import { Sighting } from '@/types';

// Mock data for sightings
const mockSightings: Sighting[] = [
  {
    id: '1',
    birdId: 'american-robin',
    birdName: 'American Robin',
    date: new Date('2024-03-15'),
    location: {
      lat: 32.2319,
      lng: -110.9501,
      name: 'Old Main Lawn'
    },
    photo: undefined,
    notes: 'Saw a pair of robins hopping around the lawn, likely looking for worms after the recent rain.',
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
    birdId: 'northern-cardinal',
    birdName: 'Northern Cardinal',
    date: new Date('2024-03-13'),
    location: {
      lat: 32.2330,
      lng: -110.9480,
      name: 'Student Union Garden'
    },
    photo: undefined,
    notes: 'Bright red male cardinal singing from the top of a mesquite tree. Beautiful song!',
    userId: 'user3',
    userName: 'Mike',
    isApproved: true,
    createdAt: new Date('2024-03-13T08:45:00')
  }
];

export default function SightingsPage() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBird, setSelectedBird] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Filter sightings
  const filteredSightings = mockSightings.filter(sighting => {
    const matchesSearch = sighting.birdName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sighting.location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sighting.notes.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBird = selectedBird === 'all' || sighting.birdId === selectedBird;
    
    const matchesDate = !selectedDate || sighting.date.toDateString() === new Date(selectedDate).toDateString();

    return matchesSearch && matchesBird && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0C234B] mb-4">Bird Sightings</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Share your bird observations with the PlumaUA community. 
              Every sighting helps us understand and protect our campus birds.
            </p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center space-x-2 bg-[#AB0520] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
            >
              <Camera className="h-5 w-5" />
              <span>{showForm ? 'Cancel' : 'Report Sighting'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Submission Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#0C234B] mb-6">Report a Sighting</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bird Species */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bird Species *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent">
                    <option value="">Select a bird...</option>
                    <option value="american-robin">American Robin</option>
                    <option value="house-sparrow">House Sparrow</option>
                    <option value="mourning-dove">Mourning Dove</option>
                    <option value="northern-cardinal">Northern Cardinal</option>
                    <option value="cactus-wren">Cactus Wren</option>
                    <option value="gila-woodpecker">Gila Woodpecker</option>
                    <option value="other">Other (specify in notes)</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Sighting *
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Location name (e.g., Old Main Lawn)"
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2 border border-[#AB0520] text-[#AB0520] rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Use Current Location</span>
                  </button>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo (optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#AB0520] transition-colors">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe what you observed: behavior, number of birds, weather conditions, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#AB0520] text-white rounded-lg hover:bg-red-800 transition-colors"
                >
                  Submit Sighting
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search sightings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
                />
              </div>
            </div>

            {/* Bird Filter */}
            <div className="lg:w-48">
              <select
                value={selectedBird}
                onChange={(e) => setSelectedBird(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
              >
                <option value="all">All Birds</option>
                <option value="american-robin">American Robin</option>
                <option value="house-sparrow">House Sparrow</option>
                <option value="mourning-dove">Mourning Dove</option>
                <option value="northern-cardinal">Northern Cardinal</option>
                <option value="cactus-wren">Cactus Wren</option>
                <option value="gila-woodpecker">Gila Woodpecker</option>
              </select>
            </div>

            {/* Date Filter */}
            <div className="lg:w-48">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSightings.length} of {mockSightings.length} sightings
          </p>
        </div>

        {/* Sightings Feed */}
        <div className="space-y-6">
          {filteredSightings.map((sighting) => (
            <div key={sighting.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                {/* Photo placeholder */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 flex-shrink-0">
                  <Camera className="h-8 w-8 text-[#AB0520]" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#0C234B]">{sighting.birdName}</h3>
                    <span className="text-sm text-gray-500">
                      {sighting.date.toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{sighting.location.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{sighting.userName}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{sighting.notes}</p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="text-[#AB0520] hover:text-red-800 font-semibold text-sm">
                      View on Map
                    </button>
                    <button className="text-[#AB0520] hover:text-red-800 font-semibold text-sm">
                      View Bird Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSightings.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No sightings found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center space-x-2 bg-[#AB0520] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
            >
              <Camera className="h-5 w-5" />
              <span>Be the first to report a sighting!</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 