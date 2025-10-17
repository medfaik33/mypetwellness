'use client';

import { useState, useEffect } from 'react';

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

export interface WordPressResponse {
  success: boolean;
  data: BlogPost[];
  total: number;
  error?: string;
  message?: string;
}

export function useWordPressPosts(options: {
  per_page?: number;
  page?: number;
  categories?: number[];
  tags?: number[];
  search?: string;
  orderby?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug';
  order?: 'asc' | 'desc';
} = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (options.per_page) params.append('per_page', options.per_page.toString());
        if (options.page) params.append('page', options.page.toString());
        if (options.categories) params.append('categories', options.categories.join(','));
        if (options.tags) params.append('tags', options.tags.join(','));
        if (options.search) params.append('search', options.search);
        if (options.orderby) params.append('orderby', options.orderby);
        if (options.order) params.append('order', options.order);

        const response = await fetch(`/api/wordpress/posts?${params}`);
        const result: WordPressResponse = await response.json();

        if (result.success) {
          setPosts(result.data);
        } else {
          setError(result.error || 'Failed to fetch posts');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [options.per_page, options.page, options.categories, options.tags, options.search, options.orderby, options.order]);

  return { posts, loading, error };
}

export function useWordPressPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/wordpress/posts/${slug}`);
        const result = await response.json();

        if (result.success) {
          setPost(result.data);
        } else {
          setError(result.error || 'Failed to fetch post');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}
