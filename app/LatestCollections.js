import getAllProducts from '@/getAllProducts'
import React from 'react'
import ProductCard from './components/ProductCard';

export default async function LatestCollections() {

    const products = await getAllProducts();

    console.log(products)

  return (
    <div className='bg-[#FFEBF0]'>
     <div className='w-11/12 mx-auto '>
        <div className='text-center py-12'>
            <h3 className='text-3xl py-2 font-bold'><span className=' text-gray-500'>LATEST </span>COLLECTIONS

</h3>
<p className='text-gray-600 text-xl'>✨ নতুন স্টাইলে জ্বলে উঠুন! ✨<br/>
ট্রেন্ডিং পণ্যগুলোর সাথে থাকুন সবসময় এক ধাপ এগিয়ে! আপনার ফ্যাশন, <br/>আপনার পরিচয় <span className='text-[#C43882]'>GloreBD</span> এর সাথে।❤️</p>
        </div>
        <div>
            <h3 className='text-3xl font-bold text-center pb-20'>
                Women Clothing
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
            </h3>
        </div>
     </div>
    </div>
  )
}
