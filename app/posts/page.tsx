import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: 'introduction-nextjs',
    title: 'Introduction à Next.js',
    excerpt: 'Découverte rapide de l’App Router et du rendu hybride.',
    date: '2025-09-01',
  },
  {
    slug: 'server-vs-client-components',
    title: 'Server vs Client Components',
    excerpt: 'Comprendre quand choisir un composant serveur ou client.',
    date: '2025-09-05',
  },
  {
    slug: 'astuces-tailwind',
    title: 'Astuces Tailwind CSS',
    excerpt: 'Quelques patterns pour rester productif avec Tailwind.',
    date: '2025-09-10',
  },
];

export const metadata = {
  title: 'Articles',
};

export default function PostsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <p className="text-neutral-300 text-sm">
          Liste statique d&apos;exemples (Server Component).
        </p>
      </header>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="group border border-neutral-800 rounded-lg p-5 hover:border-emerald-500/50 transition-colors"
          >
            <article className="space-y-2">
              <h2 className="text-xl font-semibold">
                <Link
                  href={`/posts/${post.slug}`}
                  className="group-hover:text-emerald-400 underline decoration-transparent group-hover:decoration-emerald-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-neutral-400 text-sm">{post.excerpt}</p>
              <time
                dateTime={post.date}
                className="block text-xs text-neutral-500"
              >
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </time>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}