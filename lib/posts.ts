export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: 'introduction-nextjs',
    title: 'Introduction to Next.js',
    excerpt: 'Quick look at the App Router and hybrid rendering.',
    content: 'Full content for Introduction to Next.js...',
    date: '2025-09-01',
  },
  {
    slug: 'server-vs-client-components',
    title: 'Server vs Client Components',
    excerpt: 'Understand when to pick one over the other.',
    content: 'Detailed comparison of Server vs Client Components...',
    date: '2025-09-05',
  },
  {
    slug: 'tailwind-tips',
    title: 'Tailwind CSS Tips',
    excerpt: 'Patterns to stay productive.',
    content: 'Some practical Tailwind tips...',
    date: '2025-09-10',
  },
];