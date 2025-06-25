// app/Navbar.tsx
"use client"; // Required directive for client components

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">Home</Link>
        <div className="flex space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/users">Users</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          
          {typeof window !== 'undefined' && localStorage.getItem('authToken') && (
            <button 
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}