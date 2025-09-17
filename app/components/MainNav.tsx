'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function MainNav() {
  const { data: session } = useSession()

  return (
    <div className="flex gap-6">
      <Link href="/" className="hover:text-emerald-400 transition-colors">
        Accueil
      </Link>
      <Link href="/posts" className="hover:text-emerald-400 transition-colors">
        Articles
      </Link>
      {session && (
        <Link href="/posts/new" className="hover:text-emerald-400 transition-colors">
          New Post
        </Link>
      )}
    </div>
  )
}