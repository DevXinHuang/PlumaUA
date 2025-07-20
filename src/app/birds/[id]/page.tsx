import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Users, Camera } from 'lucide-react';
import { Bird } from '@/types';

// Comprehensive Tucson/UA Campus Bird Data (same as directory page)
const mockBirds: Bird[] = [
  // Year-Round Residents
  {
    id: 'gambels-quail',
    commonName: 'Gambel\'s Quail',
    scientificName: 'Callipepla gambelii',
    description: 'A covey-forming desert quail commonly seen on campus edges and neighborhoods. Often forages on the ground in desert scrub and suburban yards.',
    behavior: 'Forms coveys and forages on the ground. Males have distinctive black face and chestnut sides.',
    vocalizations: 'Sharp "ka-KAA-ka" calls and soft clucking sounds.',
    habitat: 'Desert scrub, suburban yards, campus edges',
    campusRange: 'Common on campus edges and desert areas',
    images: [],
    colors: ['brown', 'gray', 'black', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'mourning-dove',
    commonName: 'Mourning Dove',
    scientificName: 'Zenaida macroura',
    description: 'Abundant year-round resident in urban areas and deserts. Ubiquitous on campus lawns and rooftops with distinctive mournful cooing.',
    behavior: 'Ground feeders that walk rather than hop. Often perch on wires and rooftops.',
    vocalizations: 'Soft, mournful cooing: "coo-ah, coo, coo, coo"',
    habitat: 'Open areas, urban environments, campus lawns',
    campusRange: 'Common throughout campus, especially in open areas',
    images: [],
    colors: ['gray', 'brown', 'pink'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'annas-hummingbird',
    commonName: 'Anna\'s Hummingbird',
    scientificName: 'Calypte anna',
    description: 'Our most common hummingbird on campus and in town. Common in winter and present in smaller numbers in summer.',
    behavior: 'Territorial birds that defend feeding areas. Males perform spectacular dive displays.',
    vocalizations: 'Sharp chip calls and buzzy songs.',
    habitat: 'Gardens, flower beds, feeders, campus landscaping',
    campusRange: 'Common at campus flower beds and feeders year-round',
    images: [],
    colors: ['green', 'red', 'pink', 'gray'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'gila-woodpecker',
    commonName: 'Gila Woodpecker',
    scientificName: 'Melanerpes uropygialis',
    description: 'Iconic desert woodpecker of Tucson. Common in neighborhoods with saguaros or palm trees. Often nests in saguaros.',
    behavior: 'Climbs tree trunks and cacti in search of insects. Excavates nest cavities in saguaros.',
    vocalizations: 'Sharp calls and drumming on trees and cacti.',
    habitat: 'Desert areas with saguaro cacti and palm trees',
    campusRange: 'Common around saguaros and palm trees on campus',
    images: [],
    colors: ['brown', 'red', 'black', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'cactus-wren',
    commonName: 'Cactus Wren',
    scientificName: 'Campylorhynchus brunneicapillus',
    description: 'Arizona\'s state bird, perfectly adapted to desert life. Builds large nests in cacti and has distinctive chattering call.',
    behavior: 'Active foragers that hop and climb through desert vegetation. Build large, football-shaped nests.',
    vocalizations: 'Harsh, chattering calls and a variety of whistles and trills.',
    habitat: 'Desert scrub, cactus forests, campus desert areas',
    campusRange: 'Common in desert areas and cactus gardens',
    images: [],
    colors: ['brown', 'white', 'black'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'house-sparrow',
    commonName: 'House Sparrow',
    scientificName: 'Passer domesticus',
    description: 'Common urban resident introduced from Europe. Ubiquitous on campus plazas and around buildings.',
    behavior: 'Highly social birds that form flocks. Nest in cavities and building alcoves.',
    vocalizations: 'Simple chirps and chatters.',
    habitat: 'Urban areas, campus plazas, building alcoves',
    campusRange: 'Abundant around buildings and campus structures',
    images: [],
    colors: ['brown', 'gray', 'black'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

interface BirdProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BirdProfilePage({ params }: BirdProfilePageProps) {
  const { id } = await params;
  const bird = mockBirds.find(b => b.id === id);

  if (!bird) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/birds" 
            className="inline-flex items-center space-x-2 text-[#AB0520] hover:text-red-800 font-semibold mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Bird Directory</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0C234B] mb-2">
                {bird.commonName}
              </h1>
              <p className="text-lg text-gray-600 italic">{bird.scientificName}</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link 
                href={`/sightings?bird=${bird.id}`}
                className="inline-flex items-center space-x-2 bg-[#AB0520] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              >
                <Camera className="h-5 w-5" />
                <span>Report Sighting</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-[#0C234B] mb-4">Photos</h2>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg h-64 flex items-center justify-center border border-amber-200">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-[#AB0520] mx-auto mb-4" />
                  <p className="text-amber-700">Photo Gallery Coming Soon</p>
                  <p className="text-sm text-amber-600 mt-2">Submit photos through sightings</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-[#0C234B] mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{bird.description}</p>
            </div>

            {/* Behavior */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-[#0C234B] mb-4">Behavior</h2>
              <p className="text-gray-700 leading-relaxed">{bird.behavior}</p>
            </div>

            {/* Vocalizations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-[#0C234B] mb-4">Vocalizations</h2>
              <p className="text-gray-700 leading-relaxed">{bird.vocalizations}</p>
            </div>

            {/* Habitat */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-[#0C234B] mb-4">Habitat</h2>
              <p className="text-gray-700 leading-relaxed">{bird.habitat}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0C234B] mb-4">Quick Facts</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Size</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {bird.size.charAt(0).toUpperCase() + bird.size.slice(1)}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {bird.colors.map((color) => (
                      <span 
                        key={color}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800"
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Seasons</h4>
                  <div className="flex flex-wrap gap-2">
                    {bird.seasons.map((season) => (
                      <span 
                        key={season}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {season.charAt(0).toUpperCase() + season.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Range */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0C234B] mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#AB0520]" />
                Campus Range
              </h3>
              <p className="text-gray-700">{bird.campusRange}</p>
            </div>

            {/* Recent Sightings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0C234B] mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-[#AB0520]" />
                Recent Sightings
              </h3>
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No recent sightings</p>
                <Link 
                  href={`/sightings?bird=${bird.id}`}
                  className="text-[#AB0520] hover:text-red-800 font-semibold"
                >
                  View all sightings →
                </Link>
              </div>
            </div>

            {/* Related Birds */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0C234B] mb-4">Similar Birds</h3>
              <div className="space-y-3">
                {mockBirds
                  .filter(b => b.id !== bird.id && b.size === bird.size)
                  .slice(0, 3)
                  .map((relatedBird) => (
                    <Link 
                      key={relatedBird.id}
                      href={`/birds/${relatedBird.id}`}
                      className="block p-3 rounded-lg border border-gray-100 hover:border-[#AB0520] hover:bg-red-50 transition-colors"
                    >
                      <h4 className="font-semibold text-[#0C234B]">{relatedBird.commonName}</h4>
                      <p className="text-sm text-gray-600 italic">{relatedBird.scientificName}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 