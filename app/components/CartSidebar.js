"use client"
import { useCart } from "../context/CartContext";
import { X ,Trash2} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalAmount,
  } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">আপনার অর্ডার</h2>
        <button onClick={() => setIsCartOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-170px)]">
        {cartItems.length === 0 && (
          <p className="text-center text-gray-500">Cart is empty</p>
        )}

        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border p-2 rounded relative"
          >
            <div className="relative w-16 h-16">
              <Image
                src={item.images[0].optimizeUrl}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-pink-600 font-bold text-sm mb-1">৳{item.price}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="border px-2 text-sm"
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="border px-2 text-sm"
                >
                  +
                </button>
              </div>
            </div>
            <button
  onClick={() => removeFromCart(item._id)}
  className="text-white bg-red-500 p-1 rounded absolute top-1 right-1 hover:bg-red-600"
>
  <Trash2 size={16} />
</button>

          </div>
        ))}
      </div>

      {/* Subtotal and buttons */}
      <div className="p-4 border-t space-y-2">
        <div className="flex justify-between font-semibold text-base">
          <span>Subtotal:</span>
          <span>৳{totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex gap-4">
          <button
          onClick={clearCart}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm"
        >
          Clear All
        </button>
        <button
          onClick={() => setIsCartOpen(false)}
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 text-sm"
        >
          Continue Shopping
        </button>
        </div>
      </div>
    </div>
  );
}
