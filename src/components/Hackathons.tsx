// React and Next.js imports for component functionality
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { hackathonWins } from '../../public/data/hackathons';

/**
 * Hackathons Component - Displays a grid of hackathon victory cards
 * 
 * This component renders all hackathon achievements in an attractive card layout.
 * Each card shows key information and links to a detailed page for that hackathon.
 * Features responsive design, hover effects, and clean typography.
 * 
 * @returns JSX element containing the hackathon victories section
 */
export default function Hackathons() {
  return (
    <div className="px-[5vw] py-12">
      {/* Section title with trophy emoji for visual appeal */}
      <div className='text-2xl font-bold mb-8'>🏆 Hackathon Victories</div>
      
      {/* Responsive grid layout - single column on mobile, two columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map through each hackathon victory to create individual cards */}
        {hackathonWins.map((hackathon) => (
          {/* Clickable link wrapper with group hover effects */}
          <Link 
            key={hackathon.id} 
            href={`/hackathons/${hackathon.id}`}
            className="group block"
          >
            {/* Main card container with hover animations and border effects */}
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-[#00A7E1] cursor-pointer transform hover:scale-105">
              
              {/* Hero image section with overlay and position badge */}
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={hackathon.img}
                  alt={hackathon.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Position badge positioned over the image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold w-fit">
                    {hackathon.position}
                  </div>
                </div>
              </div>
              {/* Card content section with padding */}
              <div className="p-6 pt-0">
                {/* Header section with title and location */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00A7E1] transition-colors">
                      {hackathon.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{hackathon.location}</p>
                  </div>
                </div>
                
                {/* Project information section */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#00A7E1] mb-2">
                    {hackathon.projectName}
                  </h4>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {hackathon.projectDescription}
                  </p>
                </div>

                {/* Technology tags section - shows first 3 tags with overflow indicator */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {hackathon.tags.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{hackathon.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Team members section */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold">Team:</span> {hackathon.teamMembers.join(', ')}
                  </p>
                </div>

                {/* Footer section with date and call-to-action */}
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-sm">
                    {hackathon.date}
                  </div>
                  <div className="text-[#00A7E1] text-sm group-hover:text-white transition-colors">
                    Read more →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Inspirational footer message about hackathon experiences */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          These victories represent countless hours of innovation, collaboration, and caffeine-fueled coding sessions. 
          Each hackathon was a journey of learning, building, and pushing the boundaries of what&apos;s possible.
        </p>
      </div>
    </div>
  );
}
