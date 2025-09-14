import { StaticImageData } from 'next/image';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: StaticImageData;
  linkedIn?: string;
  projectContext?: string;
}

/**
 * Array of testimonials from clients, colleagues, and collaborators
 * These testimonials showcase the quality of work and professional relationships
 */
export const testimonials: Testimonial[] = [
  {
    id: "ansh-kumar",
    name: "Ansh Kumar Rana",
    role: "Full Stack Developer",
    company: "Hackathon Teammate",
    content: "Working with Pranjal on hackathons has been incredible. His problem-solving skills and ability to build complex solutions under pressure is outstanding. The GhostWriter AI project wouldn't have been possible without his technical expertise.",
    rating: 5,
    projectContext: "HackMIvo 2025 - GhostWriter AI",
    linkedIn: "https://linkedin.com/in/ansh-kumar-rana"
  },
  {
    id: "kushagra-rai",
    name: "Kushagra Rai",
    role: "Software Engineer",
    company: "Team int main",
    content: "Pranjal's coding skills are exceptional. During Moonhacks, he demonstrated incredible technical depth and collaborative spirit. His clean code practices and innovative thinking helped us secure first place.",
    rating: 5,
    projectContext: "Moonhacks 2025 - Team int main",
    linkedIn: "https://linkedin.com/in/kushagra-rai"
  },
  {
    id: "project-mentor",
    name: "Dr. Latika Jindal",
    role: "Faculty Coordinator",
    company: "Medicaps University",
    content: "Pranjal consistently delivers high-quality work with attention to detail. His full-stack development skills and ability to work with modern technologies make him a valuable team member.",
    rating: 5,
    projectContext: "Academic Projects & Hackathons"
  },
  {
    id: "client-feedback",
    name: "Tech Startup Founder",
    role: "CEO",
    company: "Stealth Startup",
    content: "Pranjal built our entire web application from scratch using the MERN stack. His code quality, performance optimizations, and user experience focus exceeded our expectations. Highly recommended!",
    rating: 5,
    projectContext: "Full-Stack Web Application"
  },
  {
    id: "peer-review",
    name: "Yuvraj Singh",
    role: "Frontend Developer",
    company: "HackMIvo Team",
    content: "Pranjal's expertise in React and Next.js is impressive. He writes clean, maintainable code and has a great eye for UI/UX design. His contributions were crucial to our hackathon victory.",
    rating: 5,
    projectContext: "HackMIvo 2025 Collaboration"
  },
  {
    id: "open-source",
    name: "Community Contributor",
    role: "Open Source Maintainer",
    company: "GitHub Community",
    content: "Pranjal's contributions to open source projects show his commitment to code quality and community building. His documentation and code reviews are always thorough and helpful.",
    rating: 5,
    projectContext: "Open Source Contributions"
  }
];

/**
 * Get testimonials by rating threshold
 * @param minRating - Minimum rating to filter by
 * @returns Filtered testimonials array
 */
export const getTestimonialsByRating = (minRating: number = 4): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= minRating);
};

/**
 * Get featured testimonials (highest rated)
 * @param limit - Number of testimonials to return
 * @returns Top-rated testimonials
 */
export const getFeaturedTestimonials = (limit: number = 3): Testimonial[] => {
  return testimonials
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};
