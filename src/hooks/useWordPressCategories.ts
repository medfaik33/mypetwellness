'use client';

import { useState, useEffect } from 'react';
import { wordpressAPI, WordPressCategory } from '@/lib/wordpress';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    socialLinks: {
      twitter?: string;
      instagram?: string;
      website?: string;
    };
  };
  publishedAt: string;
  readingTime: number;
  tags: string[];
  category: string;
  views: number;
  featured: boolean;
  locale: string;
}

export interface CategoryWithPosts {
  category: WordPressCategory;
  posts: BlogPost[];
}

export interface WordPressCategoriesResponse {
  success: boolean;
  data: CategoryWithPosts[];
  loading: boolean;
  error: string | null;
}

export function useWordPressCategories() {
  const [data, setData] = useState<CategoryWithPosts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoriesWithPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch categories first
        const categories = await wordpressAPI.getCategories();
        
        // Filter out uncategorized (id: 1) and get top categories
        const mainCategories = categories.filter(cat => cat.id !== 1).slice(0, 4);
        
        // Fetch posts for each category
        const categoriesWithPosts: CategoryWithPosts[] = await Promise.all(
          mainCategories.map(async (category) => {
            try {
              const posts = await wordpressAPI.getPosts({
                categories: [category.id],
                per_page: 3, // Get 3 posts per category
                orderby: 'date',
                order: 'desc'
              });

              const transformedPosts = posts.map(post => wordpressAPI.transformPost(post));
              
              return {
                category,
                posts: transformedPosts
              };
            } catch (error) {
              console.error(`Error fetching posts for category ${category.name}:`, error);
              return {
                category,
                posts: []
              };
            }
          })
        );

        // Also fetch uncategorized posts
        try {
          const uncategorizedPosts = await wordpressAPI.getPosts({
            categories: [1], // Uncategorized category ID
            per_page: 6,
            orderby: 'date',
            order: 'desc'
          });

          if (uncategorizedPosts.length > 0) {
            const uncategorizedCategory = categories.find(cat => cat.id === 1);
            if (uncategorizedCategory) {
              categoriesWithPosts.push({
                category: uncategorizedCategory,
                posts: uncategorizedPosts.map(post => wordpressAPI.transformPost(post))
              });
            }
          }
        } catch (error) {
          console.error('Error fetching uncategorized posts:', error);
        }

        // Filter out categories with no posts
        const categoriesWithPostsFiltered = categoriesWithPosts.filter(
          catWithPosts => catWithPosts.posts.length > 0
        );

        // Prioritize "Pet Wellness Exams" category and specific article
        const prioritizedData = [...categoriesWithPostsFiltered];
        
        // Find the "Pet Wellness Exams" category
        let wellnessExamsCategoryIndex = -1;
        for (let catIndex = 0; catIndex < prioritizedData.length; catIndex++) {
          const category = prioritizedData[catIndex];
          if (category.category.name.toLowerCase().includes('wellness') && 
              category.category.name.toLowerCase().includes('exam')) {
            wellnessExamsCategoryIndex = catIndex;
            break;
          }
        }
        
        // Move wellness category to first position
        if (wellnessExamsCategoryIndex >= 0) {
          const wellnessCategory = prioritizedData[wellnessExamsCategoryIndex];
          
          // Move wellness category to first position
          prioritizedData.splice(wellnessExamsCategoryIndex, 1);
          prioritizedData.unshift(wellnessCategory);
        }

        setData(prioritizedData);
      } catch (error) {
        console.error('Error fetching WordPress categories with posts:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesWithPosts();
  }, []);

  return {
    categoriesWithPosts: data,
    loading,
    error
  };
}
