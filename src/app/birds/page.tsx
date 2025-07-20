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
  {
    id: 'eurasian-collared-dove',
    commonName: 'Eurasian Collared-Dove',
    scientificName: 'Streptopelia decaocto',
    description: 'Non-native dove now fairly common in Tucson. Often seen on campus utility poles or at feeders.',
    behavior: 'Similar to mourning doves but larger. Often perch on utility poles and wires.',
    vocalizations: 'Soft cooing calls.',
    habitat: 'Urban areas, campus utility poles, feeders',
    campusRange: 'Common around campus buildings and feeders',
    images: [],
    colors: ['gray', 'white', 'black'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'inca-dove',
    commonName: 'Inca Dove',
    scientificName: 'Columbina inca',
    description: 'Small dove in older neighborhoods and parks. Less common than before but still seen in quiet yards.',
    behavior: 'Small, ground-feeding doves that prefer suburban desert gardens.',
    vocalizations: 'Soft cooing calls.',
    habitat: 'Older neighborhoods, parks, suburban desert gardens',
    campusRange: 'Occasionally seen in quiet campus areas',
    images: [],
    colors: ['brown', 'gray', 'white'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'costas-hummingbird',
    commonName: 'Costa\'s Hummingbird',
    scientificName: 'Calypte costae',
    description: 'Mostly year-round in the desert; common in cooler months on Tucson\'s edges. Males give buzzy calls from desert shrubs.',
    behavior: 'Territorial hummingbirds that defend feeding areas. Males have distinctive purple gorget.',
    vocalizations: 'Buzzy calls and wing sounds.',
    habitat: 'Desert areas, campus edges, desert shrubs',
    campusRange: 'Occasionally seen on campus, especially in spring bloom',
    images: [],
    colors: ['green', 'purple', 'gray'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'gilded-flicker',
    commonName: 'Gilded Flicker',
    scientificName: 'Colaptes chrysoides',
    description: 'Larger woodpecker of saguaro deserts. Can appear on Tucson\'s outskirts or parks with tall cacti.',
    behavior: 'Excavate nest holes in saguaros and other large cacti. Larger than Gila Woodpecker.',
    vocalizations: 'Loud calls and drumming.',
    habitat: 'Saguaro deserts, parks with tall cacti',
    campusRange: 'Less likely on central campus, more common in desert parks',
    images: [],
    colors: ['brown', 'yellow', 'black', 'white'],
    size: 'large',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'ladder-backed-woodpecker',
    commonName: 'Ladder-backed Woodpecker',
    scientificName: 'Dryobates scalaris',
    description: 'Small barred woodpecker in desert scrub and washes. Occasionally seen in Tucson\'s xeriscape gardens.',
    behavior: 'Small woodpecker that forages in desert vegetation. Barred back pattern.',
    vocalizations: 'Sharp calls and drumming.',
    habitat: 'Desert scrub, washes, xeriscape gardens',
    campusRange: 'Occasionally seen in campus desert areas',
    images: [],
    colors: ['brown', 'black', 'white'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'western-screech-owl',
    commonName: 'Western Screech-Owl',
    scientificName: 'Megascops kennicottii',
    description: 'Common in Tucson\'s residential areas with mature trees. Often undetected by day.',
    behavior: 'Nocturnal hunters that nest in palm skirt cavities and large mesquites.',
    vocalizations: 'Soft trilling calls heard on warm nights.',
    habitat: 'Residential areas with mature trees, campus palm trees',
    campusRange: 'Nest in campus palm trees and large mesquites',
    images: [],
    colors: ['brown', 'gray', 'white'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'harriss-hawk',
    commonName: 'Harris\'s Hawk',
    scientificName: 'Parabuteo unicinctus',
    description: 'Fairly common raptor unique for hunting in social groups. Thrives in Tucson\'s suburbs.',
    behavior: 'Social hunters that work in family groups. Often perch on utility poles.',
    vocalizations: 'Harsh calls and whistles.',
    habitat: 'Suburban areas, campus periphery, utility poles',
    campusRange: 'Often seen in small family groups around campus periphery',
    images: [],
    colors: ['brown', 'red', 'white', 'black'],
    size: 'large',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'brown-headed-cowbird',
    commonName: 'Brown-headed Cowbird',
    scientificName: 'Molothrus ater',
    description: 'Brood-parasitic blackbird common around Tucson. Often in mixed flocks on campus lawns.',
    behavior: 'Brood parasites that lay eggs in other birds\' nests. Form mixed flocks.',
    vocalizations: 'Varied calls and songs.',
    habitat: 'Open areas, campus lawns, mixed flocks',
    campusRange: 'Common in mixed flocks on campus lawns',
    images: [],
    colors: ['brown', 'black', 'gray'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'lesser-goldfinch',
    commonName: 'Lesser Goldfinch',
    scientificName: 'Spinus psaltria',
    description: 'Another common finch on campus and in gardens. Often seen in flocks feeding on seed heads.',
    behavior: 'Social finches that form flocks. Feed on seeds and drink from fountains.',
    vocalizations: 'Musical calls and songs.',
    habitat: 'Gardens, campus arboretum, seed heads',
    campusRange: 'Common in campus arboretum and gardens',
    images: [],
    colors: ['yellow', 'green', 'black'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'european-starling',
    commonName: 'European Starling',
    scientificName: 'Sturnus vulgaris',
    description: 'Introduced species now common in Tucson. Forms noisy flocks on campus lawns and roosts in palm trees.',
    behavior: 'Highly social birds that form large flocks. Roost communally in trees.',
    vocalizations: 'Varied calls and mimicry.',
    habitat: 'Urban areas, campus lawns, palm trees',
    campusRange: 'Common on campus lawns and palm tree roosts',
    images: [],
    colors: ['black', 'white', 'iridescent'],
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
  {
    id: 'bells-vireo',
    commonName: 'Bell\'s Vireo',
    scientificName: 'Vireo bellii',
    description: 'Summer breeder in riparian thickets and brushy washes around Tucson. Drab grayish bird with persistent chatter song.',
    behavior: 'Forage in dense vegetation. Persistent singers during breeding season.',
    vocalizations: 'Persistent chatter song.',
    habitat: 'Riparian thickets, brushy washes, dense vegetation',
    campusRange: 'Less likely on central campus unless in dense plantings',
    images: [],
    colors: ['gray', 'white', 'brown'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'summer-tanager',
    commonName: 'Summer Tanager',
    scientificName: 'Piranga rubra',
    description: 'Summer migrant. Breeds in riparian woodlands in Tucson. Adult males are bright red.',
    behavior: 'Forage in trees and shrubs. Males are bright red, females yellow-green.',
    vocalizations: 'Robust songs and calls.',
    habitat: 'Riparian woodlands, well-watered parks with tall trees',
    campusRange: 'Occasionally wanders into well-treed parts of campus',
    images: [],
    colors: ['red', 'yellow', 'green'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'swainsons-hawk',
    commonName: 'Swainson\'s Hawk',
    scientificName: 'Buteo swainsoni',
    description: 'Summer hawk. Arrives March–April; commonly seen soaring over Tucson\'s outskirts and agricultural areas.',
    behavior: 'Soar on thermals and hunt insects like grasshoppers. Migrate in groups.',
    vocalizations: 'High-pitched calls.',
    habitat: 'Agricultural areas, outskirts, open areas',
    campusRange: 'Some traverse campus on thermals during migration',
    images: [],
    colors: ['brown', 'white', 'black'],
    size: 'large',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'lesser-nighthawk',
    commonName: 'Lesser Nighthawk',
    scientificName: 'Chordeiles acutipennis',
    description: 'Summer evening flier. Common at dusk from May through August, flying over campus sports fields and lights.',
    behavior: 'Nocturnal hunters that catch insects in flight. Roost in desert washes by day.',
    vocalizations: 'Nasal peent call.',
    habitat: 'Open areas, sports fields, desert washes',
    campusRange: 'Common at dusk over campus sports fields',
    images: [],
    colors: ['brown', 'gray', 'white'],
    size: 'medium',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'turkey-vulture',
    commonName: 'Turkey Vulture',
    scientificName: 'Cathartes aura',
    description: 'Present in summer soaring over the city; most leave Tucson in winter. Often seen in kettles riding thermals.',
    behavior: 'Soar on thermals in groups called kettles. Scavenge for carrion.',
    vocalizations: 'Usually silent, occasional hisses.',
    habitat: 'Open areas, thermals, campus skies',
    campusRange: 'Often seen soaring over campus during spring and summer',
    images: [],
    colors: ['black', 'brown', 'red'],
    size: 'large',
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
  {
    id: 'sandhill-crane',
    commonName: 'Sandhill Crane',
    scientificName: 'Antigone canadensis',
    description: 'Wintering waterbird (regional). While not on campus, thousands winter in Sulphur Springs Valley nearby.',
    behavior: 'Large, graceful birds that form large flocks. Migrate in V-formations.',
    vocalizations: 'Loud, trumpeting calls.',
    habitat: 'Wetlands, agricultural fields, regional areas',
    campusRange: 'Occasionally seen flying high over campus during migration',
    images: [],
    colors: ['gray', 'red', 'white'],
    size: 'large',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'lincolns-sparrow',
    commonName: 'Lincoln\'s Sparrow',
    scientificName: 'Melospiza lincolnii',
    description: 'Winter sparrow found in wet or brushy spots on campus and gardens. Shy, with finely streaked buffy chest.',
    behavior: 'Shy sparrows that forage in dense vegetation. Finely streaked plumage.',
    vocalizations: 'Soft calls and songs.',
    habitat: 'Wet areas, brushy spots, campus gardens',
    campusRange: 'Winter resident in wet or brushy campus areas',
    images: [],
    colors: ['brown', 'white', 'gray'],
    size: 'small',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'cedar-waxwing',
    commonName: 'Cedar Waxwing',
    scientificName: 'Bombycilla cedrorum',
    description: 'Irregular winter visitor. Flocks move into Tucson in some winters when berries are plentiful.',
    behavior: 'Social birds that form flocks. Feed on berries and fruits.',
    vocalizations: 'High-pitched calls.',
    habitat: 'Fruiting trees, campus berry trees',
    campusRange: 'Irregular winter visitor to campus fruiting trees',
    images: [],
    colors: ['brown', 'yellow', 'black', 'white'],
    size: 'small',
    seasons: ['winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'merlin',
    commonName: 'Merlin',
    scientificName: 'Falco columbarius',
    description: 'Winter falcon. A small, speedy falcon that hunts birds. Individuals winter in Tucson.',
    behavior: 'Fast, agile hunters that chase small birds. Perch on high vantage points.',
    vocalizations: 'Sharp calls.',
    habitat: 'Open areas, campus open spaces',
    campusRange: 'Occasional winter resident hunting on campus',
    images: [],
    colors: ['brown', 'gray', 'white'],
    size: 'small',
    seasons: ['fall', 'winter', 'spring'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'yellow-headed-blackbird',
    commonName: 'Yellow-headed Blackbird',
    scientificName: 'Xanthocephalus xanthocephalus',
    description: 'Winter blackbird (regional). Huge flocks gather at agricultural fields and wetlands around Tucson.',
    behavior: 'Form large flocks in winter. Males have bright yellow heads.',
    vocalizations: 'Harsh calls and songs.',
    habitat: 'Agricultural fields, wetlands, regional areas',
    campusRange: 'Occasionally join grackle flocks on campus',
    images: [],
    colors: ['yellow', 'black', 'white'],
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
  },
  {
    id: 'lazuli-bunting',
    commonName: 'Lazuli Bunting',
    scientificName: 'Passerina amoena',
    description: 'Migrant. Small orange-blue bunting seen at desert foothills and sometimes in town during migration.',
    behavior: 'Forage in shrubs and trees during migration stops.',
    vocalizations: 'Musical songs and calls.',
    habitat: 'Desert foothills, campus lawns, hedges during migration',
    campusRange: 'Occasionally seen on campus lawns during migration',
    images: [],
    colors: ['blue', 'orange', 'white'],
    size: 'small',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'macgillivrays-warbler',
    commonName: 'MacGillivray\'s Warbler',
    scientificName: 'Geothlypis tolmiei',
    description: 'Migrant. A skulking yellow warbler with gray hood that passes through Tucson during migration.',
    behavior: 'Skulking behavior in dense vegetation. Forage low in shrubs.',
    vocalizations: 'Soft calls and songs.',
    habitat: 'Riparian corridors, gardens, dense shrubbery',
    campusRange: 'May be encountered in thick campus shrubbery during migration',
    images: [],
    colors: ['yellow', 'gray', 'white'],
    size: 'small',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'olive-sided-flycatcher',
    commonName: 'Olive-sided Flycatcher',
    scientificName: 'Contopus cooperi',
    description: 'Migrant. A big flycatcher with a bold vest that may be seen atop tall snags or trees on campus.',
    behavior: 'Perch on high vantage points. Known for distinctive call.',
    vocalizations: '"Quick, THREE beers!" call.',
    habitat: 'Tall trees, snags, campus high perches',
    campusRange: 'May be seen atop tall campus trees during migration',
    images: [],
    colors: ['brown', 'white', 'gray'],
    size: 'medium',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'barn-swallow',
    commonName: 'Barn Swallow',
    scientificName: 'Hirundo rustica',
    description: 'Transient (and summer). Many migrate through in spring, and some also nest in Tucson in summer.',
    behavior: 'Aerial hunters that swoop for insects. Build mud nests under bridges and eaves.',
    vocalizations: 'Twittering calls.',
    habitat: 'Open areas, campus lawns, under bridges',
    campusRange: 'Swooping for insects over campus lawns during migration',
    images: [],
    colors: ['blue', 'orange', 'white'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'osprey',
    commonName: 'Osprey',
    scientificName: 'Pandion haliaetus',
    description: 'Migrant. Seen occasionally flying over campus or the city during migration.',
    behavior: 'Fish-eating raptors that migrate along coastlines. Soar on thermals.',
    vocalizations: 'High-pitched calls.',
    habitat: 'Coastal areas, migration routes, campus skies',
    campusRange: 'Occasionally seen flying over campus during migration',
    images: [],
    colors: ['brown', 'white', 'black'],
    size: 'large',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Rare/Exotic Species
  {
    id: 'streak-backed-oriole',
    commonName: 'Streak-backed Oriole',
    scientificName: 'Icterus pustulatus',
    description: 'A striking orange-and-black oriole that normally lives in western Mexico. Rarely strays north into Arizona.',
    behavior: 'Similar to other orioles but extremely rare in Arizona. Forage in trees and shrubs.',
    vocalizations: 'Rich whistled songs and chattering calls.',
    habitat: 'Western Mexico, rare vagrant to Arizona',
    campusRange: 'One individual famously seen at a feeder in central Tucson in January 2018, just east of UA campus',
    images: [],
    colors: ['orange', 'black', 'white'],
    size: 'small',
    seasons: ['winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'rufous-backed-robin',
    commonName: 'Rufous-backed Robin',
    scientificName: 'Turdus rufopalliatus',
    description: 'A relative of the American Robin, native to Mexico, with a rusty-red back and white eye-ring.',
    behavior: 'Similar to American Robin but with distinctive rusty back. Forage on ground and in bushes.',
    vocalizations: 'Similar to American Robin but with different song patterns.',
    habitat: 'Mexico, rare winter visitor to Arizona',
    campusRange: 'Considered "definitely rare" in southern Arizona. One spotted in Tucson park in winter 2016',
    images: [],
    colors: ['brown', 'red', 'white', 'gray'],
    size: 'medium',
    seasons: ['winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'rosy-faced-lovebird',
    commonName: 'Rosy-faced Lovebird',
    scientificName: 'Agapornis roseicollis',
    description: 'A small African parrot, bright green with a rosy face, that has established feral populations in Phoenix.',
    behavior: 'Social parrots that nest in cavities. Form flocks and are very vocal.',
    vocalizations: 'High-pitched calls and chattering sounds.',
    habitat: 'African native, feral populations in Phoenix, occasional escapees in Tucson',
    campusRange: 'Not yet established in Tucson, but occasional escapees seen in campus palm trees',
    images: [],
    colors: ['green', 'pink', 'blue', 'yellow'],
    size: 'small',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'black-vented-oriole',
    commonName: 'Black-vented Oriole',
    scientificName: 'Icterus wagleri',
    description: 'A bold, black-and-orange oriole usually found in pine-oak forests of Mexico. Has appeared only a few times in Arizona.',
    behavior: 'Forage in trees and shrubs. Similar behavior to other orioles.',
    vocalizations: 'Rich whistled songs and calls.',
    habitat: 'Pine-oak forests of Mexico, rare vagrant to Arizona',
    campusRange: 'Typically spotted in southeast AZ mountains, could appear in desert foothills during vagrant events',
    images: [],
    colors: ['black', 'orange', 'white'],
    size: 'small',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'aztec-thrush',
    commonName: 'Aztec Thrush',
    scientificName: 'Ridgwayia pinicola',
    description: 'A striking black-and-white thrush from highland Mexico, often foraging in leaf litter.',
    behavior: 'Forage in leaf litter and on ground. Striking black-and-white plumage.',
    vocalizations: 'Soft calls and songs.',
    habitat: 'Highland Mexico, extremely rare vagrant to Arizona',
    campusRange: 'Sightings in Arizona extremely rare, usually in oak forest canyons during migration',
    images: [],
    colors: ['black', 'white', 'gray'],
    size: 'medium',
    seasons: ['spring', 'fall'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'rufous-capped-warbler',
    commonName: 'Rufous-capped Warbler',
    scientificName: 'Basileuterus rufifrons',
    description: 'A colorful warbler with a rufous cap and bold face pattern, typically found in tropical forests.',
    behavior: 'Active foragers in dense vegetation. Colorful with distinctive rufous cap.',
    vocalizations: 'High-pitched songs and calls.',
    habitat: 'Tropical forests of Mexico, rare but regular in southern Arizona',
    campusRange: 'Rare but regular in riparian canyons of southern Arizona, might wander into urban plantings',
    images: [],
    colors: ['brown', 'yellow', 'white', 'black'],
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0C234B] dark:text-white mb-4">Bird Directory</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the diverse bird species that call the University of Arizona campus home. 
              From common urban birds to desert specialists, explore our feathered neighbors.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search birds by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#AB0520] text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['all', 'small', 'medium', 'large'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-[#AB0520] text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {size === 'all' ? 'All Sizes' : size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {allColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedColors.includes(color)
                        ? 'bg-[#AB0520] text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Season Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Seasons</h3>
              <div className="flex flex-wrap gap-2">
                {allSeasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => toggleSeason(season)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSeasons.includes(season)
                        ? 'bg-[#AB0520] text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
          <p className="text-gray-600 dark:text-gray-400">
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
              <div key={bird.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 flex-shrink-0">
                    <BirdIcon className="h-12 w-12 text-[#AB0520]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-1">{bird.commonName}</h3>
                    <p className="text-gray-600 dark:text-gray-400 italic mb-2">{bird.scientificName}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{bird.description}</p>
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