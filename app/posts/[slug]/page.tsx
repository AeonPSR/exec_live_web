import { notFound } from 'next/navigation';

type Post = {
  slug: string;
  title: string;
  content: string;
  date: string;
};

const posts: Post[] = [
  { slug: 'introduction-nextjs', title: 'Introduction à Next.js', content: 'Contenu introductif...', date: '2025-09-01' },
  { slug: 'server-vs-client-components', title: 'Server vs Client Components', content: 'Comparaison détaillée...', date: '2025-09-05' },
  { slug: 'astuces-tailwind', title: 'Astuces Tailwind CSS', content: 'Astuce 1, astuce 2...', date: '2025-09-10' },
];

function getPost(slug: string) {
  return posts.find(p => p.slug === slug);
}

interface PostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export const dynamicParams = false; // 404 si slug inconnu

export function generateMetadata({ params }: PostPageProps) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 120),
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <time dateTime={post.date} className="text-xs text-neutral-500">
          {new Date(post.date).toLocaleDateString('fr-FR')}
        </time>
      </header>
      <div className="prose prose-invert max-w-none">
        <p>{post.content}</p>
      </div>
    </article>
  );
}