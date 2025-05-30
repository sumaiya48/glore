import React from 'react'
import { FiRepeat, FiCheckCircle, FiHeadphones } from 'react-icons/fi';
export default function Policy() {
  return (
    <div className='bg-[#FFD5DF] '>
     <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center  py-16'>
 <div>
          <FiRepeat size={48} className="mx-auto text-black" />
          <h4 className="font-bold text-lg mt-4">Easy Exchange Policy</h4>
          <p className="text-sm">We offer hassle free exchange policy</p>
        </div>
        <div>
          <FiCheckCircle size={48} className="mx-auto text-black" />
          <h4 className="font-bold text-lg mt-4">3 Days Return Policy</h4>
          <p className="text-sm">We provide 3 days free return policy</p>
        </div>
        <div>
          <FiHeadphones size={48} className="mx-auto text-black" />
          <h4 className="font-bold text-lg mt-4">Best Customer Support</h4>
          <p className="text-sm">We provide 24/7 customer support</p>
        </div>
     </div>
    </div>
  )
}
