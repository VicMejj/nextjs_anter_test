'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<{name: string; email: string} | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      router.push('/login');
    } else {
      // Simulate fetching user data
      setTimeout(() => {
        setUserData({
          name: 'Admin User',
          email: 'admin@example.com'
        });
        setIsLoading(false);
      }, 1000);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center mb-6">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{userData?.name}</h2>
            <p className="text-gray-600">{userData?.email}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Recent Activity</h3>
            <p className="text-sm">Logged in just now</p>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Notifications</h3>
            <p className="text-sm">No new notifications</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
            View Reports
          </button>
          <button className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
            Manage Users
          </button>
          <button className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}