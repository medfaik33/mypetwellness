'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';
import { useWordPressPosts } from '@/hooks/useWordPress';
import { useWordPressCategoriesForBlog } from '@/hooks/useWordPressCategoriesForBlog';
import { useLocale } from 'next-intl';

interface BlogGridProps {
  category?: string;
  tag?: string;
  search?: string;
  page?: string;
}

export function BlogGrid({ category, tag, search, page }: BlogGridProps) {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Fetch posts from WordPress
  const { posts, loading, error } = useWordPressPosts({ 
    per_page: 20,
    orderby: 'date',
    order: 'desc'
  });

  // Fetch categories from WordPress
  const { categories, loading: categoriesLoading } = useWordPressCategoriesForBlog();

  // Handle category filter
  const handleCategoryFilter = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (categorySlug === 'all' || categorySlug === '') {
      params.delete('category');
    } else {
      params.set('category', categorySlug);
    }
    
    // Reset to page 1 when changing category
    params.delete('page');
    
    const queryString = params.toString();
    const newUrl = queryString ? `/${locale}/blog?${queryString}` : `/${locale}/blog`;
    router.push(newUrl);
  };

  const allPosts = posts;

  // Filter posts based on search parameters
  let filteredPosts = allPosts;

  if (category && category !== 'all') {
    filteredPosts = filteredPosts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase() ||
      post.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (tag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase()))
    );
  }

  if (search) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
  }

  // Pagination
  const postsPerPage = 9;
  const currentPage = parseInt(page || '1');
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Show loading state
  if (loading) {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden animate-pulse shadow-lg">
                <div className="h-64 bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-700 rounded mb-3"></div>
                  <div className="h-6 bg-gray-700 rounded mb-4"></div>
                  <div className="h-3 bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded mb-6"></div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-6">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Failed to load articles from WordPress
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              {error}
            </p>
            <p className="text-sm text-gray-500">
              Please check your WordPress connection and try again.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (paginatedPosts.length === 0) {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No articles found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search criteria or browse all articles.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
        <section className="py-12 sm:py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">
              {category && category !== 'all' 
                ? `${categories.find(cat => cat.slug === category)?.name || category.charAt(0).toUpperCase() + category.slice(1)}`
                : 'Pet Blog'
              }
            </h1>
            <span className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium rounded-full self-start">
              {filteredPosts.length} articles
            </span>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {/* All Articles Button */}
            <button 
              onClick={() => handleCategoryFilter('all')}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                !category || category === 'all'
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              All Articles
            </button>
            
            {/* Dynamic Categories from WordPress */}
            {categoriesLoading ? (
              // Loading skeleton for categories
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse">
                  <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              ))
            ) : (
              categories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => handleCategoryFilter(cat.slug)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                    category === cat.slug
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {paginatedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-40 sm:h-48 lg:h-64 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2 sm:px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full">
                    By {post.author.name}
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="px-2 sm:px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 lg:mb-6 line-clamp-3 leading-relaxed text-xs sm:text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > postsPerPage && (
          <div className="text-center mt-6 sm:mt-8 lg:mt-12">
            <Link
              href={`/${locale}/blog?${new URLSearchParams({
                ...(category && { category }),
                ...(tag && { tag }),
                ...(search && { search }),
                page: (currentPage + 1).toString()
              }).toString()}`}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-xs sm:text-sm lg:text-base"
            >
              <span>Load More Articles</span>
              <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}