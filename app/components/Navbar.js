"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SidebarWithToggle from "./SidebarWithToggle";
import { Home,ShoppingCart, ShoppingBag, Info, Phone } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  
  const { cartCount , setIsCartOpen } = useCart();
  


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
    {/* Top Navbar for Desktop */}
<div className="bg-[#FFD5DF] font-bold sticky top-0 z-50 hidden md:flex">
  <div className="navbar w-11/12 mx-auto">
    <div className="navbar-start gap-5">
      <SidebarWithToggle />
      <div className="flex items-center gap-2">
        <Link href="/collections" className="flex items-center gap-1 hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span>Search</span>
        </Link>
      </div>
    </div>

    <div className="navbar-center">
      <Link href="/" className="btn btn-ghost text-xl">
        Glory
      </Link>
    </div>

    <div className="navbar-end gap-4">
      
      <Link href="/collections"  className="flex items-center gap-1 hover:underline">
        <ShoppingBag size={22} />
        <span>Shop</span>
      </Link>
      <button onClick={() => setIsCartOpen(true)} className="relative">
  <ShoppingCart size={22} />
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
      {cartCount}
    </span>
  )}
</button>

      
    </div>
  </div>
</div>


      {/* Bottom Navbar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FFD5DF] z-50 flex justify-between items-center px-4 py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden">
        <SidebarWithToggle></SidebarWithToggle>
        <Link href="/collections" className="flex flex-col items-center text-xs">
          <ShoppingBag size={22} />
          <span>Shop</span>
        </Link>
        <Link
          href="/"
          className="relative -top-6 bg-white p-4 rounded-full shadow-md border-4 border-[#FFD5DF]"
        >
          <Home size={24} className="text-black" />
        </Link>
        <Link href="/aboutus" className="flex flex-col items-center text-xs">
          <Info size={22} />
          <span>About Us </span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-xs">
          <Phone size={22} />
          <span>Contact</span>
        </Link>
      </div>
    </>
  );
}
