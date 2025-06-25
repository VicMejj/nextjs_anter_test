export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js Demo</h1>
      <p className="text-lg mb-4">
        This application demonstrates key Next.js features including:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Server-side and client-side data fetching</li>
        <li>Dynamic routing</li>
        <li>API routes</li>
        <li>Form handling and validation</li>
        <li>Context API for state management</li>
        <li>Protected routes</li>
      </ul>
    </div>
  );
}