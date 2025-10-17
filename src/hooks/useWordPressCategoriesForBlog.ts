import { useState, useEffect, useCallback } from 'react';
import { wordpressAPI } from '@/lib/wordpress';

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  parent: number;
}

export function useWordPressCategoriesForBlog() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const wpCategories = await wordpressAPI.getCategories();
      
      // Filter categories and add post counts
      const categoriesWithCounts = await Promise.all(
        wpCategories.map(async (cat) => {
          try {
            
            // Get total count by fetching with a higher per_page limit
            const allPosts = await wordpressAPI.getPosts({
              categories: [cat.id],
              per_page: 100,
              orderby: 'date',
              order: 'desc',
            });
            
            return {
              id: cat.id,
              name: cat.name,
              slug: cat.slug,
              count: allPosts.length,
              parent: 0
            };
          } catch {
            return {
              id: cat.id,
              name: cat.name,
              slug: cat.slug,
              count: 0,
              parent: 0
            };
          }
        })
      );

      // Filter out categories with 0 posts and sort by name
      const filteredCategories = categoriesWithCounts
        .filter(cat => cat.count > 0)
        .sort((a, b) => a.name.localeCompare(b.name));

      setCategories(filteredCategories);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error, refetch: fetchCategories };
}
