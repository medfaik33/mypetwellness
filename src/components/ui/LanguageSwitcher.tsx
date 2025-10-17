'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function LanguageSwitcher() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const locale = useLocale();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to blog page with search query
      const searchParams = new URLSearchParams({ search: searchQuery.trim() });
      const blogUrl = `/${locale}/blog?${searchParams.toString()}`;
      router.push(blogUrl);
      
      // Clear the search input
      setSearchQuery('');
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-32 md:w-40 px-3 py-2 pl-8 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
        />
        <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
      </form>
    </div>
  );
}