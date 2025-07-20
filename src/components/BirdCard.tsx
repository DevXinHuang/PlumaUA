'use client';

import Link from 'next/link';
import { Bird } from 'lucide-react';
import { Bird as BirdType } from '@/types';

interface BirdCardProps {
  bird: BirdType;
}

const BirdCard = ({ bird }: BirdCardProps) => {
  return (
    <Link href={`/birds/${bird.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
        {/* Image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
          <Bird className="h-16 w-16 text-green-400 group-hover:text-green-600 transition-colors" />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
            {bird.commonName}
          </h3>
          <p className="text-sm text-gray-600 italic mb-2">
            {bird.scientificName}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {bird.size}
            </span>
            {bird.colors.slice(0, 2).map((color) => (
              <span 
                key={color}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {color}
              </span>
            ))}
          </div>
          
          {/* Description preview */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {bird.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BirdCard; 