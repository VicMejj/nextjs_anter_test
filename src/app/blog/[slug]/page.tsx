import { notFound } from 'next/navigation';

const posts = [
  { 
    slug: 'nextjs-fundamentals', 
    title: 'Next.js Fundamentals', 
    content: 'Next.js is a React framework that enables server-side rendering and static site generation...' 
  },
  { 
    slug: 'react-server-components', 
    title: 'React Server Components', 
    content: 'Server Components allow you to write UI that can be rendered and optionally cached on the server...' 
  },
  { 
    slug: 'authentication-patterns', 
    title: 'Authentication Patterns', 
    content: 'Implementing authentication in Next.js can be done using various strategies including JWT, session cookies, and OAuth...' 
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) return notFound();
  
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  );
}