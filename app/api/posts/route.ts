import { NextResponse } from 'next/server';
import { posts } from '@/lib/posts';

// Deactivate cache so it doesn't fucks things up
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(posts);
}