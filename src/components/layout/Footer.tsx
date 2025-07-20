import Link from 'next/link';
import { Bird as BirdIcon, Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0C234B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BirdIcon className="h-8 w-8 text-[#C5B358]" />
              <span className="text-xl font-bold">PlumaUA</span>
            </div>
            <p className="text-gray-300 mb-4">
              <em>Volans ad Cognitionem</em> - Flying toward Knowledge
            </p>
            <p className="text-gray-400 text-sm">
              Exploring and documenting the diverse bird life on campus, 
              connecting students with nature through citizen science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/birds" className="text-gray-300 hover:text-[#C5B358] transition-colors">
                  Bird Directory
                </Link>
              </li>
              <li>
                <Link href="/sightings" className="text-gray-300 hover:text-[#C5B358] transition-colors">
                  Recent Sightings
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-300 hover:text-[#C5B358] transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#C5B358] transition-colors">
                  Blog & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@plumaua.org" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#C5B358] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@plumaua.org</span>
              </a>
              <a 
                href="https://twitter.com/plumaua" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#C5B358] transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span>@plumaua</span>
              </a>
              <a 
                href="https://instagram.com/plumaua" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#C5B358] transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@plumaua</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 PlumaUA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 