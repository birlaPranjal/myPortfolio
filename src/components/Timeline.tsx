import React from 'react';
import Link from 'next/link';
import { getSortedTimeline, type TimelineEvent } from '../../public/data/timeline';

/**
 * Timeline Component - Displays professional and educational journey
 * 
 * This component showcases career progression, education, achievements,
 * and major milestones in a visually appealing timeline format.
 * Features responsive design with animated elements and interactive cards.
 * 
 * @returns JSX element containing the timeline section
 */
export default function Timeline() {
  const timelineEvents = getSortedTimeline();

  // Function to get icon based on event type
  const getEventIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'work':
        return '💼';
      case 'project':
        return '🚀';
      case 'achievement':
        return '🏆';
      case 'certification':
        return '📜';
      default:
        return '📍';
    }
  };

  // Function to get color scheme based on event type
  const getEventColors = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return 'border-blue-500 bg-blue-500/10';
      case 'work':
        return 'border-green-500 bg-green-500/10';
      case 'project':
        return 'border-purple-500 bg-purple-500/10';
      case 'achievement':
        return 'border-yellow-500 bg-yellow-500/10';
      case 'certification':
        return 'border-indigo-500 bg-indigo-500/10';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <section className="px-[5vw] py-16 bg-black" role="region" aria-labelledby="timeline-heading">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 id="timeline-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          🛤️ My Journey
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A timeline of my professional growth, education, and key achievements
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A7E1] via-purple-500 to-[#00A7E1]"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#00A7E1] rounded-full border-4 border-black flex items-center justify-center text-white font-bold z-10">
                <span className="text-xs">{getEventIcon(event.type)}</span>
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className={`bg-gray-900 rounded-lg p-6 border-l-4 ${getEventColors(event.type)} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {event.link ? (
                          <Link 
                            href={event.link}
                            className="hover:text-[#00A7E1] transition-colors"
                          >
                            {event.title}
                          </Link>
                        ) : (
                          event.title
                        )}
                      </h3>
                      <p className="text-[#00A7E1] font-semibold">{event.organization}</p>
                      {event.location && (
                        <p className="text-gray-400 text-sm">📍 {event.location}</p>
                      )}
                    </div>
                    
                    {/* Current Badge */}
                    {event.current && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Date Range */}
                  <div className="text-gray-400 text-sm mb-3">
                    {event.startDate} {event.endDate && `- ${event.endDate}`}
                    {event.current && !event.endDate && ' - Present'}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Technologies */}
                  {event.technologies && event.technologies.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {event.achievements && event.achievements.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {event.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="text-[#00A7E1] mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* External Link */}
                  {event.link && event.link.startsWith('http') && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00A7E1] hover:text-white transition-colors text-sm flex items-center"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6">
          Want to be part of my journey? Let&apos;s connect and create something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#00A7E1] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1VeQcs1VgYstEHx8EL5eIqbuazS8JsmPR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#00A7E1] text-[#00A7E1] px-6 py-3 rounded-lg hover:bg-[#00A7E1] hover:text-white transition-colors font-semibold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
