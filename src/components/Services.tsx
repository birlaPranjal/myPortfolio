import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing?: string;
  popular?: boolean;
}

/**
 * Services Component - Displays offered services and expertise
 * 
 * This component showcases the various services offered, including
 * web development, consulting, and technical solutions. Features
 * detailed service descriptions, technologies used, and key benefits.
 * 
 * @returns JSX element containing the services section
 */
export default function Services() {
  const services: Service[] = [
    {
      id: 'fullstack-development',
      title: 'Full-Stack Web Development',
      description: 'Complete web application development from concept to deployment, using modern technologies and best practices.',
      icon: '🌐',
      features: [
        'Responsive web design',
        'RESTful API development',
        'Database design & optimization',
        'Authentication & authorization',
        'Payment gateway integration',
        'Cloud deployment & hosting'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
      popular: true
    },
    {
      id: 'frontend-development',
      title: 'Frontend Development',
      description: 'Creating stunning, interactive user interfaces that provide exceptional user experiences across all devices.',
      icon: '🎨',
      features: [
        'Modern React applications',
        'Mobile-responsive design',
        'Performance optimization',
        'SEO implementation',
        'Accessibility compliance',
        'Cross-browser compatibility'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture, secure APIs, and efficient data management.',
      icon: '⚙️',
      features: [
        'RESTful & GraphQL APIs',
        'Microservices architecture',
        'Database optimization',
        'Security implementation',
        'Third-party integrations',
        'Performance monitoring'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      id: 'ecommerce-solutions',
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with shopping carts, payment processing, and inventory management.',
      icon: '🛒',
      features: [
        'Custom shopping cart',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system',
        'Admin dashboard',
        'Mobile commerce'
      ],
      technologies: ['Next.js', 'Stripe', 'PayPal', 'MongoDB', 'Node.js']
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      description: 'Expert guidance on technology choices, architecture decisions, and development best practices.',
      icon: '💡',
      features: [
        'Technology stack selection',
        'Architecture planning',
        'Code review & optimization',
        'Performance auditing',
        'Team mentoring',
        'Project planning'
      ],
      technologies: ['Various', 'Best Practices', 'Architecture Patterns']
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance to keep your applications running smoothly and securely.',
      icon: '🔧',
      features: [
        'Bug fixes & updates',
        'Security patches',
        'Performance monitoring',
        'Feature enhancements',
        '24/7 support available',
        'Regular backups'
      ],
      technologies: ['Monitoring Tools', 'CI/CD', 'DevOps', 'Cloud Services']
    }
  ];

  return (
    <section className="px-[5vw] py-16 bg-gradient-to-b from-black to-gray-900" role="region" aria-labelledby="services-heading">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          🛠️ What I Do
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive web development services to bring your ideas to life with modern technologies and best practices
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative group ${
              service.popular ? 'lg:scale-105' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Popular Badge */}
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-[#00A7E1] to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            {/* Service Card */}
            <div className={`bg-gray-800 rounded-xl p-6 border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full ${
              service.popular 
                ? 'border-[#00A7E1] shadow-lg shadow-blue-500/20' 
                : 'border-gray-700 hover:border-[#00A7E1]'
            }`}>
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                      <span className="text-[#00A7E1] mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="/contact"
                  className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
                    service.popular
                      ? 'bg-[#00A7E1] text-white hover:bg-blue-600'
                      : 'border border-[#00A7E1] text-[#00A7E1] hover:bg-[#00A7E1] hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          🚀 My Development Process
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Discovery',
              description: 'Understanding your requirements, goals, and target audience',
              icon: '🔍'
            },
            {
              step: '02',
              title: 'Planning',
              description: 'Creating detailed project roadmap and technical specifications',
              icon: '📋'
            },
            {
              step: '03',
              title: 'Development',
              description: 'Building your solution with clean, scalable, and tested code',
              icon: '💻'
            },
            {
              step: '04',
              title: 'Deployment',
              description: 'Launching your project with ongoing support and maintenance',
              icon: '🚀'
            }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00A7E1] transition-colors">
                <div className="text-3xl mb-3">{process.icon}</div>
                <div className="text-[#00A7E1] font-bold text-lg mb-2">
                  {process.step}
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-[#00A7E1] to-blue-600 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Let's discuss your ideas and create something amazing together. 
            I'm here to help bring your vision to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#00A7E1] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start a Project
            </a>
            <a
              href="https://drive.google.com/file/d/1VeQcs1VgYstEHx8EL5eIqbuazS8JsmPR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#00A7E1] transition-colors font-semibold"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
