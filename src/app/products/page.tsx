'use client';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 699, category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 199, category: 'Electronics' },
  { id: 4, name: 'Coffee Maker', price: 89, category: 'Home' },
  { id: 5, name: 'Desk Lamp', price: 45, category: 'Home' },
  { id: 6, name: 'Running Shoes', price: 120, category: 'Sports' },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const { addToCart } = useCart();

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-3 text-center py-8">
            <p>No products found matching your criteria</p>
          </div>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg font-medium mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}