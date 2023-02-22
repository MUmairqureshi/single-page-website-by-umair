'use client';
import React from 'react'
import Image from 'next/image'

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import img1 from '././asset/img2.png'
import img2 from '././asset/img3.png'
import img3 from '././asset/img4.png'
import img4 from '././asset/img5.png'
import img5 from '././asset/img6.png'
const suggesttalent = () => {
    return (
        <div className='   md:full  w-full   mx-auto   mt-166 py-14   my-84 flex-wrap  bg-black'>
            <div className='  px-4   '>
                <div className="flex max-w-[880px]  md:ml-[18%] justify-between">
                    <div><p className='uppercase text-xl md:text-2xl font-bold text-[#cea234]'>Suggested Talent</p></div>
                    <div classsName="flex  mb-14   ">
                        <span className='  py-2 px-2 text-black bg-white rounded-l-full '><ChevronLeftOutlinedIcon/></span>
                        <span className='  bg-[#d0b267] py-2 px-2 text-black rounded-r-full'>
                            <ChevronRightOutlinedIcon/>
                        </span>
                    </div>
                </div>


                <div className='mt-12   justify-between grid xl:grid-cols-6   md:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-4 mx-auto w-full '>

                    <div className='  '></div>
                    <div className="card w-[100%]   bg-base-100 rounded-lg  shadow-md
                            
                                                ">
                        <figure className='  relative'>
                        <span className="text-black absolute   px-4  mt-48 font-bold text-md   ml-3  flex-wrap      py-1 backdrop: rounded-full bg-[#fdd368]">
                                Book Now</span>

                                <Image src={img1}
                                className=" w-[100%] h-[250px]     rounded-t-lg"
                                alt="Shoes"/>

                        </figure>

                        <div className="card-body text-white border-black p-4 rounded-b-lg  bg-[#091b1b]">
                            <h2 className="card-title ">Star Name!</h2>
                            <p className='flex justify-between'>
                                <span>TV Star</span>
                                <span>1,000PKR</span>
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>


                    <div className="card w-[100%]   bg-base-100   rounded-lg shadow-md">
                        <figure><Image src={img2}
                                className="w-[100%]  h-[250px] rounded-t-lg"
                                alt="Shoes"/></figure>
                        <div className="card-body text-white border-black p-4 rounded-b-lg  bg-[#091b1b]">
                            <h2 className="card-title ">Star Name!</h2>
                            <p className='flex justify-between'>
                                <span>TV Star</span>
                                <span>1,000PKR</span>
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>


                    <div className="card w-[100%]   bg-base-100 rounded-lg shadow-md">
                        <figure><Image src={img3}
                                className="w-[100%] h-[250px] rounded-t-lg"
                                alt="Shoes"/></figure>
                        <div className="card-body text-white border-black p-4 rounded-b-lg  bg-[#091b1b]">
                            <h2 className="card-title ">Star Name!</h2>
                            <p className='flex justify-between'>
                                <span>TV Star</span>
                                <span>1,000PKR</span>
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>


                    <div className="card w-[100%] bg-base-100 rounded-lg shadow-md">
                        <figure><Image src={img4}
                                className="w-[100%]  h-[250px] rounded-t-lg"
                                alt="Shoes"/></figure>
                        <div className="card-body text-white border-black p-4 rounded-b-lg  bg-[#091b1b]">
                            <h2 className="card-title ">Star Name!</h2>
                            <p className='flex justify-between'>
                                <span>TV Star</span>
                                <span>1,000PKR</span>
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>


                    <div className="card w-[100%] bg-base-100 rounded-lg shadow-md">
                        <figure><Image src={img5}
                                className="w-[100%]  h-[250px] rounded-t-lg"
                                alt="Shoes"/></figure>
                        <div className="card-body text-white border-black p-4 rounded-b-lg  bg-[#091b1b]">
                            <h2 className="card-title ">Star Name!</h2>
                            <p className='flex justify-between'>
                                <span>TV Star</span>
                                <span>1,000PKR</span>
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default suggesttalent
