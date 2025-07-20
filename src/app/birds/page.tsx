'use client';

import { useState } from 'react';
import { Search, Grid, List, Bird as BirdIcon } from 'lucide-react';
import BirdCard from '@/components/BirdCard';
import { Bird } from '@/types';

// Comprehensive Tucson/UA Campus Bird Data
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
    id: 'rock-pigeon',
    commonName: 'Rock Pigeon',
    scientificName: 'Columba livia',
    description: 'Common feral pigeon thriving on campus and downtown. Often seen in flocks around buildings and underpasses.',
    behavior: 'Highly social birds that form large flocks. Nest on building ledges and underpasses.',
    vocalizations: 'Soft cooing and throaty calls.',
    habitat: 'Urban areas, buildings, campus structures',
    campusRange: 'Abundant around buildings and campus structures',
    images: [],
    colors: ['gray', 'blue', 'white', 'black'],
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
    id: 'great-horned-owl',
    commonName: 'Great Horned Owl',
    scientificName: 'Bubo virginianus',
    description: 'Common urban owl often nesting in palm trees and ledges. Pairs reside on campus year-round, hunting at night.',
    behavior: 'Nocturnal hunters that perch on high vantage points. Nest in large trees and palm trees.',
    vocalizations: 'Deep hooting: "hoo-hoo-hoo, hoo, hoo"',
    habitat: 'Urban areas with mature trees, campus palm trees',
    campusRange: 'Resident pairs on campus, often in palm trees',
    images: [],
    colors: ['brown', 'gray', 'white', 'black'],
    size: 'large',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'coopers-hawk',
    commonName: 'Cooper\'s Hawk',
    scientificName: 'Accipiter cooperii',
    description: 'Common urban raptor increasingly seen in Tucson. Many pairs nest in city trees including on campus.',
    behavior: 'Swift hunters that chase birds through trees. Often seen stalking at feeders.',
    vocalizations: 'Sharp "kak-kak-kak" calls.',
    habitat: 'Urban areas with trees, campus wooded areas',
    campusRange: 'Nesting pairs on campus, often seen hunting',
    images: [],
    colors: ['brown', 'gray', 'white', 'black'],
    size: 'large',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'red-tailed-hawk',
    commonName: 'Red-tailed Hawk',
    scientificName: 'Buteo jamaicensis',
    description: 'Common resident soaring over campus and perched on tall buildings. Hunts rodents on athletic fields.',
    behavior: 'Soars on thermals and perches on high vantage points. Hunts from perches.',
    vocalizations: 'Classic "kee-eeeee-arr" scream.',
    habitat: 'Open areas, urban environments, campus athletic fields',
    campusRange: 'Common soaring over campus and perched on buildings',
    images: [],
    colors: ['brown', 'red', 'white', 'black'],
    size: 'large',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'american-kestrel',
    commonName: 'American Kestrel',
    scientificName: 'Falco sparverius',
    description: 'Small falcon often seen on telephone wires around campus and open lots. Hunts insects and lizards.',
    behavior: 'Hovers while hunting and perches on wires and poles. Hunts small prey.',
    vocalizations: 'High-pitched "klee-klee-klee" calls.',
    habitat: 'Open areas, telephone wires, campus open spaces',
    campusRange: 'Common on wires and open areas around campus',
    images: [],
    colors: ['brown', 'blue', 'white', 'black'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'great-tailed-grackle',
    commonName: 'Great-tailed Grackle',
    scientificName: 'Quiscalus mexicanus',
    description: 'Common loud blackbirds of urban Tucson. Found on campus lawns and parking lots with squeaky calls.',
    behavior: 'Social birds that form flocks. Males are iridescent black, females brown.',
    vocalizations: 'Squeaky calls and whistles.',
    habitat: 'Urban areas, campus lawns, parking lots',
    campusRange: 'Abundant on campus lawns and parking areas',
    images: [],
    colors: ['black', 'brown', 'blue'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'house-finch',
    commonName: 'House Finch',
    scientificName: 'Haemorhous mexicanus',
    description: 'Very common small finch in urban Tucson. Scarlet-red males and brown-streaked females adorn campus trees.',
    behavior: 'Social birds that form flocks. Breed on building eaves and sing persistently.',
    vocalizations: 'Warbling songs and sharp chip calls.',
    habitat: 'Urban areas, campus trees, building ledges',
    campusRange: 'Abundant in campus trees and around buildings',
    images: [],
    colors: ['red', 'brown', 'gray'],
    size: 'small',
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
  },
  {
    id: 'northern-mockingbird',
    commonName: 'Northern Mockingbird',
    scientificName: 'Mimus polyglottos',
    description: 'Common in urban and suburban Tucson. Often seen atop light posts or trees, singing almost any time of day.',
    behavior: 'Territorial birds that mimic other species. Sing from high perches.',
    vocalizations: 'Complex songs with many mimicked sounds.',
    habitat: 'Urban areas, campus trees, light posts',
    campusRange: 'Common on campus, often on light posts and trees',
    images: [],
    colors: ['gray', 'white', 'black'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'curve-billed-thrasher',
    commonName: 'Curve-billed Thrasher',
    scientificName: 'Toxostoma curvirostre',
    description: 'Common Sonoran Desert resident often found in Tucson neighborhoods and campus cactus gardens.',
    behavior: 'Active foragers that dart between cacti. Noted for down-curved bill.',
    vocalizations: 'Loud "whit-wheet" calls and varied songs.',
    habitat: 'Desert areas, campus cactus gardens, mesquite',
    campusRange: 'Common in desert areas and cactus gardens',
    images: [],
    colors: ['brown', 'gray', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'verdin',
    commonName: 'Verdin',
    scientificName: 'Auriparus flaviceps',
    description: 'Tiny desert songbird with a yellow head. Year-round resident of Tucson\'s deserts and urban native-plant gardens.',
    behavior: 'Active foragers that glean insects from foliage. Build roost nests in thorny shrubs.',
    vocalizations: 'High-pitched calls and songs.',
    habitat: 'Desert areas, mesquite, acacia, campus native gardens',
    campusRange: 'Present in mesquite and acacia on campus',
    images: [],
    colors: ['yellow', 'gray', 'brown'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'phainopepla',
    commonName: 'Phainopepla',
    scientificName: 'Phainopepla nitens',
    description: 'Silky-flycatcher with black male and gray female. Often seen in desert washes and campus fruiting trees.',
    behavior: 'Feed on mistletoe berries in mesquites. Perch conspicuously on high branches.',
    vocalizations: 'Soft calls and whistles.',
    habitat: 'Desert washes, mesquite groves, campus fruiting trees',
    campusRange: 'Present where there are fruiting trees',
    images: [],
    colors: ['black', 'gray', 'red'],
    size: 'small',
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

  // Summer Breeders
  {
    id: 'white-winged-dove',
    commonName: 'White-winged Dove',
    scientificName: 'Zenaida asiatica',
    description: 'Extremely common in Tucson each summer. Their rhythmic calls are the most noticeable natural sound in Tucson during spring.',
    behavior: 'Arrive en masse by April to breed. Feed on saguaro fruit and urban feeders.',
    vocalizations: 'Rhythmic cooing calls heard throughout summer.',
    habitat: 'Urban areas with saguaros, desert cactus forests',
    campusRange: 'Common in summer, especially around saguaros',
    images: [],
    colors: ['brown', 'gray', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hooded-oriole',
    commonName: 'Hooded Oriole',
    scientificName: 'Icterus cucullatus',
    description: 'Brightly colored oriole that calls Tucson their summer home. Often found in areas with palm trees.',
    behavior: 'Build nests under palm fronds. Feed on nectar and insects.',
    vocalizations: 'Rich whistled songs and chattering calls.',
    habitat: 'Residential areas with palm trees, campus palm groves',
    campusRange: 'Summer resident in areas with palm trees',
    images: [],
    colors: ['yellow', 'orange', 'black'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'brown-crested-flycatcher',
    commonName: 'Brown-crested Flycatcher',
    scientificName: 'Myiarchus tyrannulus',
    description: 'Common summer resident in the Southwest. Favors desert washes, mesquite groves, and urban areas with mature trees.',
    behavior: 'Perch and sally for insects. Nest in cavities including old woodpecker holes.',
    vocalizations: 'Loud "wheep" calls and varied songs.',
    habitat: 'Desert washes, mesquite groves, campus mature trees',
    campusRange: 'Summer resident in areas with mature trees',
    images: [],
    colors: ['brown', 'yellow', 'gray'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'western-kingbird',
    commonName: 'Western Kingbird',
    scientificName: 'Tyrannus verticalis',
    description: 'Common along roadsides, fields, and campus athletic fields from April through summer.',
    behavior: 'Perch on wires and fences hunting insects. Aggressive defenders of territory.',
    vocalizations: 'Sharp calls and buzzy songs.',
    habitat: 'Open areas, roadsides, campus athletic fields',
    campusRange: 'Common in summer around athletic areas',
    images: [],
    colors: ['yellow', 'gray', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'black-chinned-hummingbird',
    commonName: 'Black-chinned Hummingbird',
    scientificName: 'Archilochus alexandri',
    description: 'Summer hummingbird that arrives in March. Common near water and in yards with flowers/feeders.',
    behavior: 'Territorial at feeders. Males have purple-black gorget.',
    vocalizations: 'High-pitched calls and wing buzzes.',
    habitat: 'Riparian areas, gardens, campus flowering plants',
    campusRange: 'Summer resident near blooms and water features',
    images: [],
    colors: ['green', 'purple', 'black', 'white'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'broad-billed-hummingbird',
    commonName: 'Broad-billed Hummingbird',
    scientificName: 'Cynanthus latirostris',
    description: 'Primarily a summer hummingbird in Tucson. Males are iridescent green with blue throats and red bills.',
    behavior: 'Feed on nectar and small insects. Males are territorial.',
    vocalizations: 'High-pitched calls and wing sounds.',
    habitat: 'Riparian areas, gardens, campus flowering bushes',
    campusRange: 'Summer resident at flowering bushes',
    images: [],
    colors: ['green', 'blue', 'red'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'lucys-warbler',
    commonName: 'Lucy\'s Warbler',
    scientificName: 'Oreothlypis luciae',
    description: 'Tiny, pale-gray warbler that is one of the most common breeding warblers in Tucson\'s mesquite bosques.',
    behavior: 'Forage in mesquite and acacia foliage. Nest in tree cavities.',
    vocalizations: 'High-pitched songs and calls.',
    habitat: 'Mesquite bosques, campus mesquite groves',
    campusRange: 'Summer breeder in mesquite areas',
    images: [],
    colors: ['gray', 'white', 'brown'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Winter Visitors
  {
    id: 'yellow-rumped-warbler',
    commonName: 'Yellow-rumped Warbler',
    scientificName: 'Setophaga coronata',
    description: 'Abundant winter warbler. Arrives in large numbers by October and winters in Tucson\'s urban parks and campuses.',
    behavior: 'Flit in trees and shrubs eating berries and insects. Often called "butterbutts."',
    vocalizations: 'Soft calls and songs.',
    habitat: 'Urban parks, campus trees and shrubs',
    campusRange: 'Abundant winter resident in campus trees',
    images: [],
    colors: ['yellow', 'gray', 'white', 'black'],
    size: 'small',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'white-crowned-sparrow',
    commonName: 'White-crowned Sparrow',
    scientificName: 'Zonotrichia leucophrys',
    description: 'Common winter sparrow. Small flocks appear in Tucson\'s yards, campus hedges, and desert scrub every winter.',
    behavior: 'Scratch for seeds on the ground in gardens and under shrubs.',
    vocalizations: 'Clear whistled songs and calls.',
    habitat: 'Yards, campus hedges, desert scrub',
    campusRange: 'Common winter resident in campus hedges',
    images: [],
    colors: ['brown', 'white', 'black', 'gray'],
    size: 'small',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'dark-eyed-junco',
    commonName: 'Dark-eyed Junco',
    scientificName: 'Junco hyemalis',
    description: 'Winter visitor. These northerly breeding sparrows show up in Tucson\'s parks and wooded neighborhoods in winter.',
    behavior: 'Small flocks forage on the ground. Various color forms.',
    vocalizations: 'Soft calls and trills.',
    habitat: 'Parks, wooded neighborhoods, campus grounds',
    campusRange: 'Winter resident foraging on campus grounds',
    images: [],
    colors: ['gray', 'white', 'black', 'brown'],
    size: 'small',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'ruby-crowned-kinglet',
    commonName: 'Ruby-crowned Kinglet',
    scientificName: 'Corthylio calendula',
    description: 'Winter migrant. A tiny olive-green songbird that winters in Tucson\'s trees.',
    behavior: 'Dart through foliage actively foraging. Male occasionally flashes red crown.',
    vocalizations: 'High-pitched calls and songs.',
    habitat: 'Trees, campus wooded areas',
    campusRange: 'Winter resident in campus trees',
    images: [],
    colors: ['green', 'red', 'white'],
    size: 'small',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hermit-thrush',
    commonName: 'Hermit Thrush',
    scientificName: 'Catharus guttatus',
    description: 'Winter thrush. Winters in shady urban vegetated areas like campus arboretum.',
    behavior: 'Hop on ground flipping leaves. Brown with reddish tail.',
    vocalizations: 'Beautiful flute-like songs.',
    habitat: 'Shady urban areas, campus arboretum',
    campusRange: 'Winter resident in campus arboretum',
    images: [],
    colors: ['brown', 'red', 'white'],
    size: 'medium',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'red-naped-sapsucker',
    commonName: 'Red-naped Sapsucker',
    scientificName: 'Sphyrapicus nuchalis',
    description: 'Winter woodpecker. Migrates from northern forests to spend winters in Tucson\'s riparian areas and campus.',
    behavior: 'Drill sap wells in ornamental trees. Look for rows of sap holes.',
    vocalizations: 'Nasal calls and drumming.',
    habitat: 'Riparian areas, campus ornamental trees',
    campusRange: 'Winter resident drilling sap wells in trees',
    images: [],
    colors: ['black', 'white', 'red', 'yellow'],
    size: 'medium',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Migrants
  {
    id: 'wilsons-warbler',
    commonName: 'Wilson\'s Warbler',
    scientificName: 'Cardellina pusilla',
    description: 'Common migrant. A bright yellow warbler with a black cap (males) that passes through in spring and fall.',
    behavior: 'Active foragers in trees and shrubs. Do not breed locally.',
    vocalizations: 'Sharp calls and songs.',
    habitat: 'Trees, campus wooded areas during migration',
    campusRange: 'Common migrant in campus trees',
    images: [],
    colors: ['yellow', 'black', 'green'],
    size: 'small',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'western-tanager',
    commonName: 'Western Tanager',
    scientificName: 'Piranga ludoviciana',
    description: 'Migrant. Gorgeous yellow-and-red males occasionally stop in Tucson in spring or fall.',
    behavior: 'May visit campus fig or mulberry trees during migration.',
    vocalizations: 'Robust songs and calls.',
    habitat: 'Trees, campus fruiting trees during migration',
    campusRange: 'Migrant visitor to campus fruiting trees',
    images: [],
    colors: ['yellow', 'red', 'black', 'white'],
    size: 'medium',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'rufous-hummingbird',
    commonName: 'Rufous Hummingbird',
    scientificName: 'Selasphorus rufus',
    description: 'Migrant hummingbird. Common during fall migration in the Tucson area. Fiery-orange males.',
    behavior: 'Stop at feeders and flowers during migration. Very territorial.',
    vocalizations: 'Sharp calls and wing sounds.',
    habitat: 'Feeders, flowers, campus during migration',
    campusRange: 'Common migrant at campus feeders',
    images: [],
    colors: ['orange', 'green', 'red'],
    size: 'small',
    seasons: ['spring', 'fall'],
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
                    <BirdIcon className="h-12 w-12 text-[#AB0520]" />
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
            <BirdIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No birds found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
} 