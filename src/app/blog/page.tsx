import Link from 'next/link';

// In a real app, this would come from getStaticProps or an API
const posts = [
  { id: 1, slug: 'nextjs-fundamentals', title: 'Next.js Fundamentals', summary: 'Learn the core concepts of Next.js' },
  { id: 2, slug: 'react-server-components', title: 'React Server Components', summary: 'Understanding the new paradigm' },
  { id: 3, slug: 'authentication-patterns', title: 'Authentication Patterns', summary: 'Secure your Next.js applications' },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
            </Link>
            <p className="text-gray-600">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}