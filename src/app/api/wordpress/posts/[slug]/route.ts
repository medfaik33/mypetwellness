import { NextRequest, NextResponse } from 'next/server';
import { wordpressAPI } from '@/lib/wordpress';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Fetch post from WordPress
    const post = await wordpressAPI.getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'Post not found'
        },
        { status: 404 }
      );
    }

    // Transform post to our format
    const transformedPost = wordpressAPI.transformPost(post);

    return NextResponse.json({
      success: true,
      data: transformedPost
    });

  } catch (error) {
    console.error('WordPress API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch post from WordPress',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
