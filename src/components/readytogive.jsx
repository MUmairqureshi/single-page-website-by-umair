'use client';
import React from 'react'
import Image from 'next/image'

import img1 from '././asset/img2.png'
import img2 from '././asset/img3.png'
import img3 from '././asset/img4.png'
import img4 from '././asset/img5.png'

const readytogive = () => {
    return ( 
        <div className="w-full   mx-auto ">     
           <div className='w-full    object-cover  mx-auto   bg-gray-800/90  absolute '> 
            <div className='grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4  grid-cols-2 sm:grid-cols-3  object-cover mix-blend-overlay '>
                <div className="card md:mb-0 mb-4 w-[100%]   bg-base-100  object-cover mix-blend-overlay  rounded-lg shadow-md">
                    <figure><Image src={img1}
                            className="w-[90%]    h-[314px]  "
                            alt="Shoes"/></figure>

                </div>
                <div className="card md:mb-0 mb-4 w-[100%]   bg-base-100  object-cover mix-blend-overlay  rounded-lg shadow-md">
                    <figure><Image src={img4}
                            className="w-[90%]    h-[314px]  "
                            alt="Shoes"/></figure>

                </div>
                <div className="card md:mb-0 mb-4 w-[100%]   bg-base-100   rounded-lg shadow-md">
                    <figure><Image src={img2}
                            className="w-[90%]    h-[314px]  "
                            alt="Shoes"/></figure>

                </div>
                <div className="card md:mb-0 mb-4 w-[100%]   bg-base-100   rounded-lg shadow-md">
                    <figure><Image src={img1}
                            className="w-[90%]    h-[314px] "
                            alt="Shoes"/></figure>

                </div>
                <div className="card md:mb-0   w-[100%]   bg-base-100   rounded-lg shadow-md">
                    <figure><Image src={img3}
                            className="w-[90%]    h-[314px] "
                            alt="Shoes"/></figure>

                </div>
                <div className="card md:mb-0 w-[100%]   bg-base-100   rounded-lg shadow-md">
                    <figure><Image src={img4}
                            className="w-[90%]    h-[314px] "
                            alt="Shoes"/></figure>

                </div>

            </div>
           
        </div>
        <div className="  mx-auto justify-center py-[75px]     text-center relative">
                <p className="  text-white mx-auto justify-center   font-bold max-w-sm text-2xl     items-center ">Ready to Give the most Meainingful Gift on Earth</p>
                <button className=" rounded-full m-2 px-4 p-1 bg-[#d0b267]">Discover</button>
            </div>
        </div>

    )
}

export default readytogive
