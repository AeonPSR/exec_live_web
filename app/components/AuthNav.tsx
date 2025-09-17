'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function AuthNav() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <span className="text-neutral-500">Loading...</span>
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-emerald-400">
          Welcome, {session.user?.name}!
        </span>
        <button
          onClick={() => signOut()}
          className="hover:text-emerald-400 transition-colors"
        >
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <Link 
      href="/auth/signin" 
      className="hover:text-emerald-400 transition-colors"
    >
      Sign In
    </Link>
  )
}