import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import AuthProvider from './components/AuthProvider';
import AuthNav from './components/AuthNav';
import MainNav from './components/MainNav';

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
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

function Header() {
return (
	<header className="border-b border-neutral-800">
		<nav className="max-w-3xl mx-auto flex justify-between items-center px-4 py-4 font-medium">
			<MainNav />
			<AuthNav />
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