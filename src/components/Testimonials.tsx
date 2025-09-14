import React from 'react';
import { testimonials } from '../../public/data/testimonials';

/**
 * Testimonials Component - Displays client and colleague feedback
 * 
 * This component showcases testimonials from various collaborators, clients,
 * and team members to build trust and demonstrate the quality of work.
 * Features a responsive grid layout with rating stars and project context.
 * 
 * @returns JSX element containing the testimonials section
 */
export default function Testimonials() {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="px-[5vw] py-16 bg-gradient-to-b from-black to-gray-900" role="region" aria-labelledby="testimonials-heading">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          💬 What People Say
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feedback from clients, teammates, and collaborators who have experienced my work firsthand
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#00A7E1] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Rating Stars */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(testimonial.rating)}
              </div>
              <span className="text-gray-400 text-sm">({testimonial.rating}/5)</span>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-gray-300 mb-6 leading-relaxed">
              "{testimonial.content}"
            </blockquote>

            {/* Author Information */}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-[#00A7E1] text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                
                {/* LinkedIn Link */}
                {testimonial.linkedIn && (
                  <a
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A7E1] hover:text-white transition-colors"
                    aria-label={`Visit ${testimonial.name}'s LinkedIn profile`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Project Context */}
              {testimonial.projectContext && (
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Project Context</span>
                  <p className="text-sm text-gray-400 mt-1">{testimonial.projectContext}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6">
          Ready to work together? Let's create something amazing!
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#00A7E1] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
