'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ClockIcon, ArrowRightIcon, EyeIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';
import { useWordPressCategories } from '@/hooks/useWordPressCategories';


export function FeaturedArticles() {
  const locale = useLocale();
  const { categoriesWithPosts, loading, error } = useWordPressCategories();

  return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-full opacity-20 blur-xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm border border-gray-300/50 dark:border-gray-700/50 mb-4 sm:mb-6">
                <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  Featured Articles
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Pet Wellness Exams
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}& Care Tips
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Discover expert insights on pet wellness exams, preventive care, and practical tips from our community of veterinary professionals and passionate pet owners.
              </p>
            </div>

            {/* Categories with Posts */}
            {loading ? (
              // Loading skeleton
              <div className="space-y-12">
                {Array.from({ length: 2 }).map((_, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-6">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 animate-pulse">
                          <div className="h-56 bg-gray-200 dark:bg-gray-700"></div>
                          <div className="p-6">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 mb-4">Failed to load articles from WordPress</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Please check your WordPress connection</p>
              </div>
            ) : categoriesWithPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 mb-4">No articles found</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Check your WordPress site for published posts</p>
              </div>
            ) : (
              <div className="space-y-12 sm:space-y-16">
                {categoriesWithPosts.map((categoryWithPosts) => (
                  <div key={categoryWithPosts.category.id} className="space-y-6 sm:space-y-8">
                    {/* Category Header */}
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {categoryWithPosts.category.name}
                      </h3>
                    </div>

                    {/* Articles Grid for this Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {categoryWithPosts.posts.map((article) => (
                        <article
                          key={article.id}
                          className="group bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                          <div className="relative h-48 sm:h-56 overflow-hidden">
                            <Image
                              src={article.coverImage}
                              alt={article.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                              <span className="px-2 sm:px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full">
                                {article.category}
                              </span>
                            </div>
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center space-x-1 text-white text-xs sm:text-sm">
                              <EyeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span>{article.views.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          <div className="p-4 sm:p-6">
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                              {article.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 sm:px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                              <Link href={`/${locale}/blog/${article.slug}`}>
                                {article.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                                  <Image
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                  />
                                </div>
                                <div>
                                  <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{article.author.name}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{formatDate(article.publishedAt)}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                                <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{article.readingTime} min</span>
                              </div>
                            </div>

                            <Link
                              href={`/${locale}/blog/${article.slug}`}
                              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-xs sm:text-sm group/link"
                            >
                              <span>Read Article</span>
                              <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            <span>Explore All Articles</span>
            <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}