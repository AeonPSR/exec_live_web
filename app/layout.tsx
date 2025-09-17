import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Mon Blog',
    template: '%s | Mon Blog',
  },
  description: 'Exemple Next.js App Router avec TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-neutral-950 text-neutral-100">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="max-w-3xl mx-auto flex gap-6 px-4 py-4 font-medium">
        <Link href="/" className="hover:text-emerald-400 transition-colors">Accueil</Link>
        <Link href="/posts" className="hover:text-emerald-400 transition-colors">Articles</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-neutral-400">
        © {new Date().getFullYear()} Mon Blog. Tous droits réservés.
      </div>
    </footer>
  );
}