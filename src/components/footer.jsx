'use client';

import React from 'react'

const footer = () => {
    return (
        <div className="w-full h-full bg-black mx-auto">
            <div className="container mx-auto   ">
                <div className="  justify-center py-16 text-center">
                    <h2 className="font-bold mb-6 mx-auto max-w-xs md:text-3xl text-center text-[#d0b267]">We'd Love To Talk With you
                    </h2>
                    <p className="bg-[#d6b153]  max-w-[144px] mx-auto  p-2 text-black mb-4 rounded-full ">
                        Ask for help</p>
                </div>
                <div className="grid text-[#d3cbff]   list-none  max-w-[800px] md:grid-cols-4 mx-auto justify-center grid-cols-2 ">

                    <div className="px-4  decoration-none  mb-4 list-none  ">
                        <li className="font-bold decoration-none list-none  no-underline underline-none  outline-none text-decoration-none">
                            SOLUTIONS
                        </li>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>

                    </div>

                    <div className="px-4 mb-4">

                        <li className="font-bold">
                            SUPPORT
                        </li>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API Status</li>
                        <li>Claims</li>

                    </div>

                    <div className='px-4'>

                        <li className="font-bold">
                            COMPANY
                        </li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>


                    </div>
                    <div className='px-4'>

                        <li className=" font-bold">
                            LEGAL
                        </li>
                        <li>Claims</li>
                        <li>Analytics</li>
                        <li>Terms</li>
                        <li>Policies</li>
                        <li>Conditions</li>

                    </div>

                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 max-w-[800px] justify-center mx-auto  px-4 py-8  '>
                    <div>
                        <p className='text-[#d3cbff] '>Company Name</p>
                    </div>
                    <div>
                        <p className='text-[#d6b153]'>Logo Here</p>
                    </div>
                    <div className='text-[#d3cbff] '>
                        Lorem, ipsum
                    </div>
                </div>
            </div>
        </div>
    )
}
export default footer
