import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Post } from '@/lib/posts';

async function getPost(slug: string): Promise<Post | undefined> {
  // Fetch from API to get the latest posts including new ones
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  if (!res.ok) return undefined;
  
  const posts: Post[] = await res.json();
  return posts.find(p => p.slug === slug);
}

// Pre-generate static params so each post is SSG
export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  
  const posts: Post[] = await res.json();
  return posts.map(p => ({ slug: p.slug }));
}

// Optional: enforce only known slugs (404 for unknown)
export const dynamicParams = true; // Allow new slugs at runtime

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic metadata per post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <time dateTime={post.date} className="text-xs text-neutral-500">
          {new Date(post.date).toLocaleDateString('en-GB')}
        </time>
      </header>

      <div className="prose prose-invert max-w-none">
        <p>{post.content}</p>
      </div>

      <nav className="pt-6">
        <a
          href="/posts"
          className="text-sm text-emerald-400 hover:underline"
        >
          ← Back to posts
        </a>
      </nav>
    </article>
  );
}