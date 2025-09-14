// React and Next.js imports for server-side rendering and metadata generation
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getHackathonById } from '../../../../public/data/hackathons';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Metadata } from 'next';

/**
 * Generate metadata for hackathon detail pages for better SEO
 * Creates dynamic titles and descriptions based on hackathon data
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const hackathon = getHackathonById(params.slug);
  
  if (!hackathon) {
    return {
      title: 'Hackathon Not Found | Pranjal Birla',
      description: 'The requested hackathon page could not be found.',
    };
  }

  return {
    title: `${hackathon.title} - ${hackathon.position} Victory | Pranjal Birla`,
    description: `${hackathon.description} Learn about the ${hackathon.projectName} project and our journey to victory.`,
    keywords: `hackathon, ${hackathon.title}, ${hackathon.projectName}, ${hackathon.tags.join(', ')}, programming competition`,
    openGraph: {
      title: `${hackathon.title} - ${hackathon.position} Victory`,
      description: hackathon.description,
      type: 'article',
    },
  };
}

/**
 * HackathonDetailPage Component - Dynamic page for individual hackathon details
 * 
 * This component creates detailed pages for each hackathon victory using Next.js dynamic routing.
 * It fetches hackathon data based on the URL slug and displays comprehensive information
 * including the full story, team details, technologies used, and achievements.
 * 
 * Route: /hackathons/[slug]
 * Examples: /hackathons/hackmivo-2025, /hackathons/moonhack25
 * 
 * @param params - The dynamic route parameters containing the slug
 * @returns JSX element containing the detailed hackathon page
 */
export default function HackathonDetailPage({ params }: { params: { slug: string } }) {
  // Extract the slug parameter from the route params
  const slug = params.slug;
  
  // Fetch the specific hackathon data using the slug identifier
  const hackathon = getHackathonById(slug);

  // Handle case where hackathon is not found (404-like behavior)
  if (!hackathon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Hackathon Not Found</h1>
          <p className="text-gray-400 mb-8">The hackathon you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/"
            className="bg-[#00A7E1] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Render the detailed hackathon page with full information
  return (
    <div className="min-h-screen relative">
      {/* Animated background beams for visual appeal */}
      <BackgroundBeams className="-z-10" />
      
      <div className="px-[5vw] py-12 relative z-10">
        {/* Navigation back button */}
        <Link 
          href="/"
          className="inline-flex items-center text-[#00A7E1] hover:text-white transition-colors mb-8"
        >
          ← Back to Portfolio
        </Link>

        {/* Page header section with title, position badge, and project showcase */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {hackathon.title}
            </h1>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-lg font-bold">
              {hackathon.position}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
            <div>📍 {hackathon.location}</div>
            <div>📅 {hackathon.date}</div>
          </div>

          <div className="bg-gradient-to-r from-[#00A7E1] to-blue-600 text-white rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={hackathon.img}
                alt={`${hackathon.title} - ${hackathon.projectName} project showcase`}
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A7E1] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{hackathon.projectName}</h2>
              <p className="text-lg opacity-90">{hackathon.projectDescription}</p>
              {hackathon.projectUrl && (
                <a 
                  href={hackathon.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-white text-[#00A7E1] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">The Story</h3>
              <div className="prose prose-invert max-w-none">
                {hackathon.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Members */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">🤝 Team Members</h4>
              <ul className="space-y-2">
                {hackathon.teamMembers.map((member, index) => (
                  <li key={index} className="text-gray-300">
                    • {member}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">🛠️ Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {hackathon.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-[#00A7E1] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">🏆 Key Achievements</h4>
              <ul className="space-y-2">
                {hackathon.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300">
                    ✓ {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Organizers */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">🎯 Organizers</h4>
              <ul className="space-y-1">
                {hackathon.organizers.map((organizer, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    • {organizer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to work on innovative projects and participate in hackathons. 
              Let&apos;s build something amazing together!
            </p>
            <Link 
              href="/contact"
              className="bg-[#00A7E1] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
