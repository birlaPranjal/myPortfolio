'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
  description: string;
  color: string;
}

/**
 * Stats Component - Displays animated achievement counters
 * 
 * This component showcases key statistics and achievements with
 * animated counters that trigger when the section comes into view.
 * Features smooth number animations and responsive design.
 * 
 * @returns JSX element containing the statistics section
 */
export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Statistics data
  const stats: StatItem[] = [
    {
      id: 'projects',
      label: 'Projects Completed',
      value: 25,
      suffix: '+',
      icon: '🚀',
      description: 'Full-stack applications and websites delivered',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'hackathons',
      label: 'Hackathon Wins',
      value: 2,
      icon: '🏆',
      description: 'First place victories in competitive programming',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'technologies',
      label: 'Technologies Mastered',
      value: 15,
      suffix: '+',
      icon: '⚡',
      description: 'Programming languages and frameworks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'experience',
      label: 'Years of Experience',
      value: 3,
      suffix: '+',
      icon: '📈',
      description: 'Professional development and learning',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: 15,
      suffix: '+',
      icon: '😊',
      description: 'Satisfied customers and successful collaborations',
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 'code-lines',
      label: 'Lines of Code',
      value: 50,
      suffix: 'K+',
      icon: '💻',
      description: 'Clean, maintainable code written',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  // Initialize animated values
  useEffect(() => {
    const initialValues: Record<string, number> = {};
    stats.forEach(stat => {
      initialValues[stat.id] = 0;
    });
    setAnimatedValues(initialValues);
  }, []);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    stats.forEach(stat => {
      let startValue = 0;
      const endValue = stat.value;
      const duration = 2000; // 2 seconds
      const increment = endValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: Math.floor(startValue)
        }));
      }, 16);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="px-[5vw] py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900" 
      role="region" 
      aria-labelledby="stats-heading"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          📊 By the Numbers
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Quantifying my journey in software development and the impact I've made
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="relative group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            
            {/* Card Content */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">
                {stat.icon}
              </div>

              {/* Animated Counter */}
              <div className="text-center mb-4">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.prefix || ''}
                  {animatedValues[stat.id] || 0}
                  {stat.suffix || ''}
                </div>
                <h3 className="text-white font-semibold mt-2">
                  {stat.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {stat.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">
            🎯 Continuous Growth & Learning
          </h3>
          <p className="text-gray-300 leading-relaxed">
            These numbers represent not just achievements, but a commitment to continuous learning and improvement. 
            Every project, every line of code, and every collaboration has contributed to building robust, 
            scalable solutions that make a real impact. I believe in quality over quantity, 
            and these metrics reflect the dedication to excellence in everything I create.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="text-white font-semibold">Design-First Approach</h4>
              <p className="text-gray-400 text-sm">User experience at the heart of development</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-white font-semibold">Performance Focused</h4>
              <p className="text-gray-400 text-sm">Optimized code for lightning-fast applications</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="text-white font-semibold">Security Conscious</h4>
              <p className="text-gray-400 text-sm">Best practices for secure, reliable systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
