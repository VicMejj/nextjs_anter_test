interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  // Fetch data on the server (equivalent to getServerSideProps)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // Ensure fresh data on every request
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(0, 12).map(post => (
          <div key={post.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}