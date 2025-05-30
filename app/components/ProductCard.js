"use client";

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Link from 'next/link';


export default function ProductCard({ product }) {
  const {_id, name, price, images } = product;
  
  const { addToCart } = useCart();
  const imageUrl = images[0].optimizeUrl;

  return (

    
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto">
      
      <Link  href={`/products/${_id}`} className='block'>
<div className="relative w-full h-[500px]">
        
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
    </Link>
      

      <div className="p-4">
        <h2 className="text-sm font-bold text-gray-800 truncate">{name}</h2>
        <div className="mt-2 flex items-center justify-between">
           <button
            onClick={() => addToCart(product)}
            className="bg-pink-800 text-white text-sm font-semibold py-3 px-4 rounded hover:bg-pink-700"
          >
            অর্ডার করুন
          </button>
          <p className="text-pink-600 font-bold text-sm">৳{price}</p>
        </div>
      </div>
    </div>

   
  );
}
