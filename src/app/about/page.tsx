'use client';

import { Mail, Twitter, Instagram, MapPin, Users, Heart, Camera, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0C234B] dark:text-white mb-4">About PlumaUA</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <em>Volans ad Cognitionem</em> - Flying toward Knowledge
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0C234B] dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              PlumaUA connects the University of Arizona community with the diverse bird life on campus, 
              fostering appreciation for nature through citizen science and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#AB0520]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-2">Conservation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Document and protect the diverse bird species that call our campus home.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-[#AB0520]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share knowledge about bird identification, behavior, and ecology.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#AB0520]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build a community of bird enthusiasts and citizen scientists.
              </p>
            </div>
          </div>
        </div>

        {/* Xin's Story */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0C234B] dark:text-white mb-6">Meet Xin</h2>
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Hi! I&apos;m Xin, a passionate bird enthusiast and student at the University of Arizona. 
                  My journey into bird watching began during my first year on campus when I noticed 
                  the incredible diversity of birds that share our beautiful desert campus.
                </p>
                <p>
                  What started as casual observations quickly grew into a deep fascination with 
                  avian behavior, migration patterns, and the unique adaptations of desert birds. 
                  I realized that many students and faculty members were also interested in the 
                  birds around us, but there wasn&apos;t a centralized way to share our observations 
                  and learn from each other.
                </p>
                <p>
                  That&apos;s why I created PlumaUA - to connect our campus community with the amazing 
                  bird life that surrounds us every day. Whether you&apos;re a seasoned birder or just 
                  curious about the feathered friends in your backyard, there&apos;s a place for you here.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-8 text-center">
              <div className="bg-white dark:bg-gray-700 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                <Users className="h-16 w-16 text-[#AB0520]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-2">Xin Huang</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Founder & Lead Birder</p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>• University of Arizona Student</p>
                <p>• Citizen Scientist</p>
                <p>• Bird Photography Enthusiast</p>
                <p>• Conservation Advocate</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
          <h2 className="text-3xl font-bold text-[#0C234B] dark:text-white mb-6 text-center">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-3 flex-shrink-0">
                  <Camera className="h-6 w-6 text-[#AB0520]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Document Bird Life</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Record and track bird sightings across campus to understand population trends 
                    and seasonal patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-[#AB0520]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Educational Resources</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Provide comprehensive guides, identification tips, and educational content 
                    about campus birds.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-[#AB0520]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Community Events</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Organize bird walks, workshops, and conservation activities to bring people 
                    together.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-3 flex-shrink-0">
                  <Heart className="h-6 w-6 text-[#AB0520]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Conservation Efforts</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Work with campus sustainability to improve bird habitats and promote 
                    bird-friendly practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-8 mb-8 transition-colors">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0C234B] dark:text-white mb-4">Get Involved</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our community of bird enthusiasts and help us document and protect 
              the amazing bird life on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/sightings" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center border border-gray-100 dark:border-gray-700">
                <Camera className="h-12 w-12 text-[#AB0520] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Report Sightings</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Share your bird observations with the community.
                </p>
                <span className="text-[#AB0520] group-hover:text-red-800 font-semibold">
                  Start Reporting →
                </span>
              </div>
            </Link>

            <Link href="/blog" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center border border-gray-100 dark:border-gray-700">
                <BookOpen className="h-12 w-12 text-[#AB0520] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Join Events</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Participate in bird walks and workshops.
                </p>
                <span className="text-[#AB0520] group-hover:text-red-800 font-semibold">
                  View Events →
                </span>
              </div>
            </Link>

            <Link href="/birds" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center border border-gray-100 dark:border-gray-700">
                <Users className="h-12 w-12 text-[#AB0520] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#0C234B] dark:text-white mb-2">Learn More</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore our bird directory and resources.
                </p>
                <span className="text-[#AB0520] group-hover:text-red-800 font-semibold">
                  Explore Birds →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact & Connect */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors">
          <h2 className="text-3xl font-bold text-[#0C234B] dark:text-white mb-6 text-center">Contact & Connect</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#AB0520]" />
                  <a 
                    href="mailto:contact@plumaua.org" 
                    className="text-gray-600 dark:text-gray-300 hover:text-[#AB0520] transition-colors"
                  >
                    contact@plumaua.org
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#AB0520]" />
                  <span className="text-gray-600 dark:text-gray-300">
                    University of Arizona, Tucson, AZ
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0C234B] dark:text-white mb-4">Follow Us</h3>
              <div className="space-y-4">
                <a 
                  href="https://twitter.com/plumaua" 
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-[#AB0520] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span>@plumaua</span>
                </a>
                <a 
                  href="https://instagram.com/plumaua" 
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-[#AB0520] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@plumaua</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              PlumaUA is a student-led initiative at the University of Arizona. 
              We welcome contributions from all members of the campus community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 