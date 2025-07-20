'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, MapPin, Users, ArrowRight, Search } from 'lucide-react';
import { BlogPost, Event } from '@/types';

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Spring Migration: What to Look For",
    content: "As spring approaches, keep an eye out for returning migratory birds. The University of Arizona campus becomes a haven for various species making their way north. Look for warblers in the trees, swallows swooping over open areas, and the distinctive calls of returning songbirds.",
    excerpt: "As spring approaches, keep an eye out for returning migratory birds...",
    author: "Xin",
    publishedAt: new Date('2024-03-15'),
    tags: ['migration', 'spring', 'warblers'],
    image: undefined
  },
  {
    id: '2',
    title: "Bird Photography Tips for Beginners",
    content: "Learn how to capture stunning photos of campus birds with these simple techniques. Start with common species like House Sparrows and Mourning Doves to practice your skills. Remember to be patient and respect the birds' space.",
    excerpt: "Learn how to capture stunning photos of campus birds with these simple techniques...",
    author: "Xin",
    publishedAt: new Date('2024-03-10'),
    tags: ['photography', 'tips', 'beginners'],
    image: undefined
  },
  {
    id: '3',
    title: "The Hidden Lives of Campus Sparrows",
    content: "Discover the fascinating social behaviors of our most common campus residents. House Sparrows form complex social hierarchies and exhibit remarkable adaptability to urban environments. Watch for their courtship displays and nest-building activities.",
    excerpt: "Discover the fascinating social behaviors of our most common campus residents...",
    author: "Xin",
    publishedAt: new Date('2024-03-05'),
    tags: ['sparrows', 'behavior', 'social'],
    image: undefined
  },
  {
    id: '4',
    title: "Desert Birds: Adaptations for Survival",
    content: "Explore how birds like the Cactus Wren and Gila Woodpecker have evolved to thrive in Arizona's harsh desert environment. From specialized beaks to unique nesting habits, these birds demonstrate remarkable adaptations.",
    excerpt: "Explore how birds like the Cactus Wren and Gila Woodpecker have evolved...",
    author: "Sarah",
    publishedAt: new Date('2024-02-28'),
    tags: ['desert', 'adaptations', 'cactus-wren'],
    image: undefined
  }
];

// Mock data for events
const mockEvents: Event[] = [
  {
    id: '1',
    title: "Spring Bird Walk",
    description: "Join us for a guided walk around campus to observe spring migrants and resident birds. We'll visit the best birding spots and learn about identification techniques.",
    date: new Date('2024-04-15T08:00:00'),
    location: "Old Main Lawn",
    type: 'bird-walk',
    organizer: "PlumaUA Team",
    maxParticipants: 20,
    currentParticipants: 12
  },
  {
    id: '2',
    title: "Bird Photography Workshop",
    description: "Learn the basics of bird photography with professional tips and hands-on practice. Bring your camera or smartphone!",
    date: new Date('2024-04-20T14:00:00'),
    location: "Student Union Garden",
    type: 'workshop',
    organizer: "Xin",
    maxParticipants: 15,
    currentParticipants: 8
  },
  {
    id: '3',
    title: "Campus Habitat Conservation",
    description: "Help us maintain and improve bird habitats on campus. We'll be planting native vegetation and installing bird-friendly features.",
    date: new Date('2024-04-25T09:00:00'),
    location: "Desert Garden",
    type: 'conservation',
    organizer: "Campus Sustainability",
    maxParticipants: 25,
    currentParticipants: 18
  }
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'blog' | 'events'>('blog');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blog posts
  const filteredBlogPosts = mockBlogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter events
  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0C234B] dark:text-white mb-4">Blog & Events</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay connected with the PlumaUA community through our blog posts, 
              upcoming events, and conservation activities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search blog posts and events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#AB0520] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'blog'
                    ? 'bg-white dark:bg-gray-600 text-[#AB0520] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'events'
                    ? 'bg-white dark:bg-gray-600 text-[#AB0520] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Events
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'blog' ? (
          <div className="space-y-8">
            {/* Featured Post */}
            {filteredBlogPosts.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-[#AB0520] mx-auto mb-4" />
                    <p className="text-amber-700 dark:text-amber-300">Featured Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="bg-[#AB0520] text-white px-2 py-1 rounded-full text-xs">
                      Featured
                    </span>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{filteredBlogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{filteredBlogPosts[0].publishedAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0C234B] dark:text-white mb-3">
                    {filteredBlogPosts[0].title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{filteredBlogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {filteredBlogPosts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${filteredBlogPosts[0].id}`}
                      className="text-[#AB0520] hover:text-red-800 font-semibold flex items-center space-x-1"
                    >
                      <span>Read more</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Other Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 h-32 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-[#AB0520]" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.publishedAt.toLocaleDateString()}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#0C234B] dark:text-white mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {post.tags.slice(0, 2).map((tag) => (
                                                  <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#AB0520] hover:text-red-800 font-semibold text-sm"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredBlogPosts.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No blog posts found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'bird-walk' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'workshop' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {event.type === 'bird-walk' ? 'Bird Walk' :
                         event.type === 'workshop' ? 'Workshop' : 'Conservation'}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{event.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{event.organizer}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{event.currentParticipants}/{event.maxParticipants} participants</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-[#AB0520] text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 