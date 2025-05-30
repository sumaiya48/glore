import Image from "next/image";
import {
  CheckCircle,
  Truck,
  HandCoins,
  RotateCcw
} from "lucide-react";
import Link from "next/link";
async function getProductById(id) {
  try {
    const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product", {
      cache: "no-store",
    });

    const data = await res.json();
    const products = data?.data;

    if (!products || !Array.isArray(products)) return null;

    return products.find(
      (product) => product?._id?.toString() === id?.toString()
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductById(params._id);

  if (!product) {
    return <div className="text-center py-10 text-red-500">Product not found</div>;
  }

  const imageUrl = product.images?.[0]?.optimizeUrl || "";

  return (
    <div className=" bg-[#FFD5D5] py-10 px-6">
      <div className="w-10/12 mx-auto flex gap-10">
        <div className="relative h-[750px] w-full rounded-t-2xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className=" rounded-2xl shadow-lg max-w-2xl w-full">
        

        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-pink-600 font-semibold">৳{product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">{product.category.name}</p>
          

          <Link href='/collections'><button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold w-full rounded-xl py-3 transition">
            অর্ডার করুন
          </button></Link>
           <div className="space-y-2 mt-6">
  <p className="text-gray-700 flex items-center gap-2">
    <CheckCircle className="text-green-600 w-5 h-5" />
    100% Original Product
  </p>
  <p className="text-gray-700 flex items-center gap-2">
    <Truck className="text-blue-600 w-5 h-5" />
    Express Shipping
  </p>
  <p className="text-gray-700 flex items-center gap-2">
    <HandCoins className="text-yellow-600 w-5 h-5" />
    Cash on Delivery Available
  </p>
  <p className="text-gray-700 flex items-center gap-2">
    <RotateCcw className="text-pink-600 w-5 h-5" />
    Easy return and exchange policy within 3 days
  </p>
</div>
        </div>
      </div>

      </div>
      
    </div>
  );
}
