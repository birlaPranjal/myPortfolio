import { StaticImageData } from 'next/image';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  category: 'tutorial' | 'opinion' | 'project' | 'technology' | 'career';
  featured?: boolean;
  image?: StaticImageData;
  slug: string;
}

/**
 * Blog posts and articles showcasing knowledge sharing and thought leadership
 * These posts demonstrate expertise and provide value to the developer community
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization: Beyond the Basics',
    excerpt: 'Deep dive into advanced React optimization techniques including memoization, code splitting, and virtual scrolling for large-scale applications.',
    content: `React performance optimization is crucial for building scalable applications. In this comprehensive guide, we'll explore advanced techniques that go beyond basic optimizations...`,
    author: 'Pranjal Birla',
    publishDate: '2025-01-15',
    readTime: 8,
    tags: ['React', 'Performance', 'JavaScript', 'Optimization'],
    category: 'tutorial',
    featured: true,
    slug: 'react-performance-optimization'
  },
  {
    id: 'fullstack-architecture-patterns',
    title: 'Modern Full-Stack Architecture Patterns',
    excerpt: 'Exploring microservices, serverless, and JAMstack architectures for building scalable web applications in 2025.',
    content: `The landscape of full-stack development has evolved dramatically. Let's examine the most effective architecture patterns for modern web applications...`,
    author: 'Pranjal Birla',
    publishDate: '2025-01-10',
    readTime: 12,
    tags: ['Architecture', 'Full-Stack', 'Microservices', 'JAMstack'],
    category: 'technology',
    featured: true,
    slug: 'fullstack-architecture-patterns'
  },
  {
    id: 'hackathon-winning-strategies',
    title: 'Winning Hackathons: Lessons from HackMIvo 2025',
    excerpt: 'Strategic insights and practical tips for hackathon success, from ideation to implementation and presentation.',
    content: `Having won multiple hackathons including HackMIvo 2025, I've learned valuable lessons about what makes a winning project...`,
    author: 'Pranjal Birla',
    publishDate: '2025-01-08',
    readTime: 6,
    tags: ['Hackathons', 'Competition', 'Strategy', 'Team Work'],
    category: 'career',
    slug: 'hackathon-winning-strategies'
  },
  {
    id: 'nextjs-13-app-router',
    title: 'Mastering Next.js 13 App Router: A Complete Guide',
    excerpt: 'Comprehensive guide to Next.js 13 App Router, covering routing, layouts, loading states, and server components.',
    content: `Next.js 13 introduced the revolutionary App Router, changing how we build React applications. This guide covers everything you need to know...`,
    author: 'Pranjal Birla',
    publishDate: '2025-01-05',
    readTime: 10,
    tags: ['Next.js', 'React', 'App Router', 'Server Components'],
    category: 'tutorial',
    slug: 'nextjs-13-app-router'
  },
  {
    id: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for React Developers',
    excerpt: 'Leveraging TypeScript\'s advanced features for better React development: generics, conditional types, and utility types.',
    content: `TypeScript offers powerful features that can significantly improve your React development experience. Let's explore advanced patterns...`,
    author: 'Pranjal Birla',
    publishDate: '2025-01-02',
    readTime: 9,
    tags: ['TypeScript', 'React', 'Advanced Patterns', 'Type Safety'],
    category: 'tutorial',
    slug: 'typescript-advanced-patterns'
  },
  {
    id: 'building-ghostwriter-ai',
    title: 'Building GhostWriter AI: From Concept to Victory',
    excerpt: 'Behind the scenes look at developing our award-winning AI content generation platform that secured first place at HackMIvo 2025.',
    content: `GhostWriter AI was born from a simple observation: everyone wants to write well, but not everyone has the time. Here's how we built it...`,
    author: 'Pranjal Birla',
    publishDate: '2024-12-28',
    readTime: 15,
    tags: ['AI', 'GPT-4', 'Hackathon', 'Project Case Study'],
    category: 'project',
    featured: true,
    slug: 'building-ghostwriter-ai'
  },
  {
    id: 'web-accessibility-guide',
    title: 'Web Accessibility: Building Inclusive Applications',
    excerpt: 'Practical guide to implementing accessibility features in modern web applications, ensuring your apps work for everyone.',
    content: `Web accessibility isn't just about compliance—it's about creating inclusive experiences. This guide covers practical implementation strategies...`,
    author: 'Pranjal Birla',
    publishDate: '2024-12-25',
    readTime: 7,
    tags: ['Accessibility', 'Web Development', 'Inclusive Design', 'ARIA'],
    category: 'tutorial',
    slug: 'web-accessibility-guide'
  },
  {
    id: 'developer-productivity-tools',
    title: 'Developer Productivity: Tools and Workflows That Actually Work',
    excerpt: 'Curated list of tools, extensions, and workflows that have significantly improved my development productivity and code quality.',
    content: `After years of development, I've refined my toolkit to maximize productivity. Here are the tools and workflows that make the biggest difference...`,
    author: 'Pranjal Birla',
    publishDate: '2024-12-20',
    readTime: 5,
    tags: ['Productivity', 'Tools', 'Workflow', 'Development'],
    category: 'opinion',
    slug: 'developer-productivity-tools'
  }
];

/**
 * Get featured blog posts
 * @param limit - Number of posts to return
 * @returns Featured blog posts
 */
export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured)
    .slice(0, limit);
};

/**
 * Get blog posts by category
 * @param category - Category to filter by
 * @returns Filtered blog posts
 */
export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

/**
 * Get recent blog posts
 * @param limit - Number of posts to return
 * @returns Recent blog posts sorted by date
 */
export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

/**
 * Get blog post by slug
 * @param slug - Post slug
 * @returns Blog post or undefined
 */
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
