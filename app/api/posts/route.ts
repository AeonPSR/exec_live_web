import { NextResponse } from 'next/server';
import { posts } from '@/lib/posts';

// Deactivate cache so it doesn't fucks things up
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  
  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }
  
  // Generate a simple slug from title
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  // Add to posts array
  const newPost = {
    slug,
    title,
    excerpt: `Excerpt for ${title}`,
    content: `Content for ${title} - this would be the full article.`,
    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
  };
  
  posts.push(newPost);
  
  return NextResponse.json(newPost, { status: 201 });
}