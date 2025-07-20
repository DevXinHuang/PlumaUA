export interface Bird {
  id: string;
  commonName: string;
  scientificName: string;
  description: string;
  behavior: string;
  vocalizations: string;
  habitat: string;
  campusRange: string;
  images: string[];
  colors: string[];
  size: 'small' | 'medium' | 'large';
  seasons: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Sighting {
  id: string;
  birdId: string;
  birdName: string;
  date: Date;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  photo?: string;
  notes: string;
  userId: string;
  userName: string;
  isApproved: boolean;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  type: 'bird-walk' | 'conservation' | 'workshop';
  organizer: string;
  maxParticipants?: number;
  currentParticipants: number;
} 