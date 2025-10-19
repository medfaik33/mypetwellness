import { NextRequest, NextResponse } from 'next/server';
import { wordpressAPI } from '@/lib/wordpress';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const perPage = parseInt(searchParams.get('per_page') || '3');
    const includeUncategorized = searchParams.get('include_uncategorized') === 'true';

    // Fetch categories
    const categories = await wordpressAPI.getCategories();
    
    // Filter out uncategorized (id: 1) and get top categories
    const mainCategories = categories.filter(cat => cat.id !== 1).slice(0, 4);
    
    // Fetch posts for each category
    const categoriesWithPosts = await Promise.all(
      mainCategories.map(async (category) => {
        try {
          const posts = await wordpressAPI.getPosts({
            categories: [category.id],
            per_page: perPage,
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

    // Also fetch uncategorized posts if requested
    if (includeUncategorized) {
      try {
        const uncategorizedPosts = await wordpressAPI.getPosts({
          categories: [1], // Uncategorized category ID
          per_page: perPage,
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
    }

    // Filter out categories with no posts
    const categoriesWithPostsFiltered = categoriesWithPosts.filter(
      catWithPosts => catWithPosts.posts.length > 0
    );

    return NextResponse.json({
      success: true,
      data: categoriesWithPostsFiltered
    });
  } catch (error) {
    console.error('Error in categories API route:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch categories'
      },
      { status: 500 }
    );
  }
}
