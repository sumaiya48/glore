'use client';
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

export default function CollectionsPage({ products: initialProducts }) {
  const [sortOrder, setSortOrder] = useState('low-to-high');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.subCategory);
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategories, searchText]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      sortOrder === 'low-to-high' ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sortOrder]);

  const allSubCategories = [
    'Women Clothing',
    'Sharee',
    'Jamdhani Sharee',
    'Dress',
    'Three Pics',
    'Unstitched Party Dress',
  ];

  return (
    <div className="bg-pink-50 min-h-screen p-4">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xl rounded-full px-6 py-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 bg-white rounded-xl shadow p-4">
          <h2 className="font-bold text-lg mb-3">Filter by Sub-Category</h2>
          <div className="space-y-1 text-sm">
            {allSubCategories.map((category) => (
              <label key={category} className="block">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {/* Section Header */}
          <div className="flex gap-2 justify-between items-center mb-4">
            <h1 className="md:text-2xl font-bold border-b-2 border-gray-400 pb-1">
              ALL <span className="text-pink-600">COLLECTIONS</span>
            </h1>
            <select
              className="select select-bordered text-sm font-medium"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No products found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
