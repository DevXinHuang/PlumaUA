import Link from 'next/link';
import { Bird, MapPin, Camera, BookOpen, ArrowRight } from 'lucide-react';

export default function HomePage() {
  // Mock data for Bird of the Week
  const birdOfTheWeek = {
    name: "American Robin",
    scientificName: "Turdus migratorius",
    image: "/api/placeholder/400/300",
    description: "A familiar sight on campus lawns, the American Robin is known for its distinctive orange breast and cheerful song. These birds are often seen hopping across grassy areas in search of worms and insects.",
    habitat: "Open woodlands, gardens, and lawns"
  };

  // Mock data for latest blog posts
  const latestPosts = [
    {
      id: '1',
      title: "Spring Migration: What to Look For",
      excerpt: "As spring approaches, keep an eye out for returning migratory birds...",
      date: "2024-03-15",
      author: "Xin"
    },
    {
      id: '2',
      title: "Bird Photography Tips for Beginners",
      excerpt: "Learn how to capture stunning photos of campus birds with these simple techniques...",
      date: "2024-03-10",
      author: "Xin"
    },
    {
      id: '3',
      title: "The Hidden Lives of Campus Sparrows",
      excerpt: "Discover the fascinating social behaviors of our most common campus residents...",
      date: "2024-03-05",
      author: "Xin"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Bird className="h-16 w-16 text-[#AB0520]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0C234B] mb-6">
              Welcome to <span className="text-[#AB0520]">PlumaUA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <em>Volans ad Cognitionem</em> - Flying toward Knowledge
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              Explore and document the diverse bird life on campus. Connect with nature 
              through citizen science and discover the hidden avian world around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/birds" 
                className="bg-[#AB0520] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Bird className="h-5 w-5" />
                <span>Explore Birds</span>
              </Link>
              <Link 
                href="/sightings" 
                className="bg-white text-[#AB0520] border-2 border-[#AB0520] px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Camera className="h-5 w-5" />
                <span>Report Sighting</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bird of the Week */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bird of the Week</h2>
            <p className="text-gray-600">Featured species spotted on campus</p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 border border-amber-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0C234B] mb-2">{birdOfTheWeek.name}</h3>
                <p className="text-gray-600 italic mb-4">{birdOfTheWeek.scientificName}</p>
                <p className="text-gray-700 mb-4">{birdOfTheWeek.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Habitat:</strong> {birdOfTheWeek.habitat}
                </p>
                <Link 
                  href="/birds/american-robin" 
                  className="inline-flex items-center space-x-2 text-[#AB0520] hover:text-red-800 font-semibold mt-4"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg h-64 flex items-center justify-center border border-amber-200">
                <span className="text-amber-700">Bird Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started</h2>
            <p className="text-gray-600">Choose your adventure</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/birds" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Bird className="h-12 w-12 text-[#AB0520] mb-4" />
                <h3 className="text-xl font-semibold text-[#0C234B] mb-2">Bird Directory</h3>
                <p className="text-gray-600 mb-4">Browse our comprehensive guide to campus birds</p>
                <span className="text-[#AB0520] group-hover:text-red-800 font-semibold">
                  Explore Directory →
                </span>
              </div>
            </Link>
            
            <Link href="/map" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <MapPin className="h-12 w-12 text-[#AB0520] mb-4" />
                <h3 className="text-xl font-semibold text-[#0C234B] mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">See where birds have been spotted on campus</p>
                <span className="text-[#AB0520] group-hover:text-red-800 font-semibold">
                  View Map →
                </span>
              </div>
            </Link>
            
            <Link href="/sightings" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Camera className="h-12 w-12 text-[#AB0520] mb-4" />
                <h3 className="text-xl font-semibold text-[#0C234B] mb-2">Report Sighting</h3>
                <p className="text-gray-600 mb-4">Share your bird observations with the community</p>
                <span className="text-[#AB0520] group-hover:text-red-800 font-semibold">
                  Submit Sighting →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest from the Blog</h2>
              <p className="text-gray-600">Stories, tips, and insights from the PlumaUA community</p>
            </div>
            <Link 
              href="/blog" 
              className="text-[#AB0520] hover:text-red-800 font-semibold flex items-center space-x-2"
            >
              <span>View all posts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
