"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function SidebarWithToggle({ setIsSidebarOpen }) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://glore-bd-backend-node-mongo.vercel.app/api/product"
      );
      const data = await res.json();
      const allCategories = data.data.map((product) => product.category.name);
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  return (
    <>
      
      <button
        className="items-center gap-2 p-3 rounded md:font-bold md:flex"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className=" sm:inline">Menu</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFEBF0] p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            className="text-3xl font-bold leading-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className="space-y-4">
          {categories.map((cat, index) => (
            <li key={index}>
              <Link
                href={`/category/${encodeURIComponent(cat)}`}
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
