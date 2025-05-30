import React from 'react'
import Image from 'next/image';

import image from '@/public/banner.png'

export default function Banner() {
    return (
        <div className='bg-[#FFD5DF] py-10'>
            <div className=' w-11/12 mx-auto bg-[#FFEBF0] rounded-xl flex '>
                <div className=' flex-1 flex flex-col items-center  justify-center px-6 md:p-10 '>
                    <h3 className='text-xl  md:text-5xl text-center font-extrabold leading-relaxed'>নতুন <br/>
                        <span className='text-[#C43882] '>কালেকশন</span></h3>
                    <p className='text-xs md:text-xl text-center md:my-10 leading-loose'>✨ <span className='text-[#C43882] font-bold'>GloreBD</span> - এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ❤️ <br/>
                        <span className='hidden md:block'>আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! <br/>
                        আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️</span></p>
                </div>
                <div className='flex-1 flex justify-center'>
                    <Image src={image} alt="banner image" />
                </div>
            </div>
        </div>
    )
}
