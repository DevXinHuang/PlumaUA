'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bird as BirdIcon, MapPin, Camera, BookOpen, Users } from 'lucide-react';
import { SimpleThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: BirdIcon },
    { href: '/birds', label: 'Birds', icon: BirdIcon },
    { href: '/sightings', label: 'Sightings', icon: Camera },
    { href: '/map', label: 'Map', icon: MapPin },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/about', label: 'About', icon: Users },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BirdIcon className="h-8 w-8 text-[#AB0520]" />
              <span className="text-xl font-bold text-[#0C234B] dark:text-white">PlumaUA</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#AB0520] bg-red-50 dark:bg-red-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#AB0520] hover:bg-red-50 dark:hover:bg-red-900/20'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <SimpleThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 dark:text-gray-300 hover:text-[#AB0520]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 