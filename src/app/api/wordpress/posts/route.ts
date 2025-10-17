import { NextRequest, NextResponse } from 'next/server';
import { wordpressAPI } from '@/lib/wordpress';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const per_page = searchParams.get('per_page');
    const page = searchParams.get('page');
    const categories = searchParams.get('categories');
    const tags = searchParams.get('tags');
    const search = searchParams.get('search');
    const orderby = searchParams.get('orderby');
    const order = searchParams.get('order');

    // Build options object
    const options: Record<string, string | number | number[]> = {};
    
    if (per_page) options.per_page = parseInt(per_page);
    if (page) options.page = parseInt(page);
    if (categories) options.categories = categories.split(',').map(Number);
    if (tags) options.tags = tags.split(',').map(Number);
    if (search) options.search = search;
    if (orderby) options.orderby = orderby;
    if (order) options.order = order;

    // Fetch posts from WordPress
    const posts = await wordpressAPI.getPosts(options);
    
    // Transform posts to our format
    const transformedPosts = posts.map(post => wordpressAPI.transformPost(post));

    return NextResponse.json({
      success: true,
      data: transformedPosts,
      total: posts.length
    });

  } catch (error) {
    console.error('WordPress API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch posts from WordPress',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
