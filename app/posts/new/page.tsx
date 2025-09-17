import { redirect } from 'next/navigation';
import { posts } from '@/lib/posts';

// Server Action function
async function addPost(formData: FormData) {
  'use server';
  
  const title = formData.get('title') as string;
  if (!title) return;
  
  // Call API route instead of modifying array directly
  const response = await fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  
  redirect('/posts');
}

export const metadata = {
  title: 'New Post',
};

export default function NewPostPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
        <p className="text-neutral-300 text-sm mt-2">
          Add a new post using Server Actions.
        </p>
      </header>

      <form action={addPost} className="space-y-6 max-w-lg">
        <div>
          <label 
            htmlFor="title" 
            className="block text-sm font-medium text-neutral-200 mb-2"
          >
            Post Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Enter post title..."
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
          >
            Create Post
          </button>
          
          <a
            href="/posts"
            className="px-4 py-2 bg-neutral-700 text-neutral-200 rounded-md hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </section>
  );
}