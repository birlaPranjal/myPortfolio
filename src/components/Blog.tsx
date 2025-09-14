import React from 'react';
import Link from 'next/link';
import { getFeaturedPosts, getRecentPosts, type BlogPost } from '../../public/data/blog';

/**
 * Blog Component - Displays featured articles and recent posts
 * 
 * This component showcases thought leadership through technical articles,
 * tutorials, and insights. Features both featured posts and recent articles
 * with category filtering and reading time estimates.
 * 
 * @returns JSX element containing the blog section
 */
export default function Blog() {
  const featuredPosts = getFeaturedPosts(2);
  const recentPosts = getRecentPosts(4);

  // Function to get category color
  const getCategoryColor = (category: BlogPost['category']) => {
    switch (category) {
      case 'tutorial':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'technology':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'project':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'career':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'opinion':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="px-[5vw] py-16 bg-gradient-to-b from-gray-900 to-black" role="region" aria-labelledby="blog-heading">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          📝 Latest Articles
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sharing knowledge, insights, and experiences from my journey in software development
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ⭐ Featured Articles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#00A7E1] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {/* Featured Badge */}
                <div className="bg-gradient-to-r from-[#00A7E1] to-blue-600 px-4 py-2">
                  <span className="text-white font-semibold text-sm">Featured Article</span>
                </div>

                <div className="p-6">
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {post.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3 hover:text-[#00A7E1] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="text-gray-400 text-sm">
                      {formatDate(post.publishDate)}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#00A7E1] hover:text-white transition-colors text-sm font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          📚 Recent Posts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00A7E1] transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category & Reading Time */}
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold border ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs">
                  {post.readTime}m
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-white mb-3 hover:text-[#00A7E1] transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h4>

              {/* Excerpt */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="text-gray-400 text-xs">
                {formatDate(post.publishDate)}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            📬 Stay Updated
          </h3>
          <p className="text-gray-300 mb-6">
            Get notified when I publish new articles about web development, technology trends, and programming insights.
          </p>
          
          {/* Newsletter Signup (Placeholder) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#00A7E1] focus:outline-none"
            />
            <button className="bg-[#00A7E1] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam, unsubscribe at any time. Join 500+ developers already subscribed.
          </p>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="mt-12 text-center">
        <h4 className="text-lg font-semibold text-white mb-4">Explore by Category</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {['tutorial', 'technology', 'project', 'career', 'opinion'].map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className={`px-4 py-2 rounded-lg border transition-colors hover:scale-105 ${getCategoryColor(category as BlogPost['category'])}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
