export interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  type: 'education' | 'work' | 'project' | 'achievement' | 'certification';
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  location?: string;
  link?: string;
  current?: boolean;
}

/**
 * Professional and educational timeline events
 * Showcases career progression, education, and major achievements
 */
export const timelineEvents: TimelineEvent[] = [
  {
    id: "medicaps-btech",
    title: "Bachelor of Technology - Computer Science",
    organization: "Medicaps University",
    type: "education",
    startDate: "2022",
    endDate: "2026",
    description: "Pursuing B.Tech in Computer Science with focus on full-stack development, data structures, algorithms, and software engineering principles.",
    technologies: ["Java", "Python", "JavaScript", "React", "Node.js", "MongoDB"],
    achievements: [
      "Active member of Abhyudaya Coding Club",
      "Multiple hackathon victories",
      "Technical event organizer",
      "Peer mentor for junior students"
    ],
    location: "Indore, MP",
    current: true
  },
  {
    id: "hackmivo-victory",
    title: "1st Place - HackMIvo 2025",
    organization: "Admivo & RentPrompts",
    type: "achievement",
    startDate: "2025",
    description: "Won first place with GhostWriter AI - a personalized content generation platform. Led the technical development and received an internship offer.",
    technologies: ["Next.js", "OpenAI GPT-4", "ElevenLabs", "MongoDB", "JWT"],
    achievements: [
      "Built AI-powered content generation platform",
      "Implemented personality analysis algorithms",
      "Received internship offer from RentPrompts",
      "Led team of 4 developers"
    ],
    location: "Indore, MP",
    link: "/hackathons/hackmivo-2025"
  },
  {
    id: "moonhacks-victory",
    title: "1st Place - Moonhacks 2025",
    organization: "Medicaps University",
    type: "achievement",
    startDate: "2025",
    description: "Secured first place representing Abhyudaya Coding Club with team 'int main'. Demonstrated exceptional teamwork and technical skills.",
    technologies: ["Full-Stack Development", "Problem Solving", "Team Leadership"],
    achievements: [
      "Won against 50+ competing teams",
      "Represented Abhyudaya Coding Club",
      "Built complete solution under time pressure",
      "Demonstrated leadership and collaboration"
    ],
    location: "Indore, MP",
    link: "/hackathons/moonhack25"
  },
  {
    id: "freelance-projects",
    title: "Freelance Full-Stack Developer",
    organization: "Independent",
    type: "work",
    startDate: "2023",
    description: "Developing custom web applications for clients using MERN stack. Focus on scalable architecture, clean code, and exceptional user experience.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"],
    achievements: [
      "Delivered 10+ successful projects",
      "Maintained 100% client satisfaction rate",
      "Built e-commerce platforms and SaaS applications",
      "Implemented CI/CD pipelines and cloud deployments"
    ],
    current: true
  },
  {
    id: "open-source-contributions",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    type: "project",
    startDate: "2023",
    description: "Active contributor to open source projects, focusing on React ecosystem and developer tools. Maintaining personal projects and contributing to community libraries.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "Git"],
    achievements: [
      "50+ contributions across various repositories",
      "Maintained 5+ personal open source projects",
      "Helped resolve 20+ community issues",
      "Mentored new contributors"
    ],
    current: true,
    link: "https://github.com/pranjalbirla"
  },
  {
    id: "coding-club-leadership",
    title: "Technical Lead & Mentor",
    organization: "Abhyudaya Coding Club",
    type: "work",
    startDate: "2023",
    description: "Leading technical initiatives, organizing coding competitions, and mentoring junior students in programming and development.",
    technologies: ["Leadership", "Mentoring", "Event Management", "Technical Training"],
    achievements: [
      "Organized 15+ technical workshops",
      "Mentored 50+ junior students",
      "Led hackathon preparation sessions",
      "Increased club membership by 200%"
    ],
    location: "Medicaps University",
    current: true
  },
  {
    id: "web-development-certification",
    title: "Full-Stack Web Development Certification",
    organization: "Multiple Platforms",
    type: "certification",
    startDate: "2023",
    description: "Completed comprehensive certifications in modern web development technologies and best practices.",
    technologies: ["MERN Stack", "DevOps", "Cloud Computing", "Database Design"],
    achievements: [
      "React Advanced Patterns Certification",
      "Node.js Backend Development",
      "MongoDB Database Design",
      "AWS Cloud Practitioner"
    ]
  },
  {
    id: "portfolio-projects",
    title: "Personal Portfolio Development",
    organization: "Self-Directed",
    type: "project",
    startDate: "2022",
    description: "Continuously developing and improving personal portfolio with latest technologies and best practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    achievements: [
      "Built responsive, accessible design",
      "Implemented SEO optimizations",
      "Added dynamic content management",
      "Achieved 95+ Lighthouse scores"
    ],
    current: true,
    link: "/"
  }
];

/**
 * Get timeline events by type
 * @param type - Type of events to filter by
 * @returns Filtered timeline events
 */
export const getEventsByType = (type: TimelineEvent['type']): TimelineEvent[] => {
  return timelineEvents.filter(event => event.type === type);
};

/**
 * Get current/ongoing events
 * @returns Events that are currently active
 */
export const getCurrentEvents = (): TimelineEvent[] => {
  return timelineEvents.filter(event => event.current);
};

/**
 * Sort timeline events by date (newest first)
 * @returns Sorted timeline events
 */
export const getSortedTimeline = (): TimelineEvent[] => {
  return [...timelineEvents].sort((a, b) => {
    // Convert dates to numbers for comparison (assuming YYYY format)
    const dateA = parseInt(a.startDate);
    const dateB = parseInt(b.startDate);
    return dateB - dateA; // Newest first
  });
};
