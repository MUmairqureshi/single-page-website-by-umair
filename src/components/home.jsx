/* eslint-disable jsx-a11y/alt-text */
'use client';

import React from 'react' 
import Image from 'next/image'
 import hero from './asset/hero.png'
const home = () => {
  return ( 
    <div className="w-full flex   flex-col bg-black  md:h-screen h-full px-4">
    <div className='container  bg-black  h-full md:flex lg:flex xl:flex sm:flex xs:flex   justify-center py-8  m-auto md:mt-24 sm:mt-24 mt-14 lg:mt-24'>
        <div className='text-center   mt-14  '> 
        <h1 className='md:max-w-md sm:max-w-sm xs:max-w-xs xl:mb-6 mb-2  md:text-3xl md:2 xl:text-5xl text-2xl text-[#cea234] font-bold '> LOREM IPSUM SED DOLOR DED</h1>
     <p className='md:max-w-md  mb-4  text-white md:text-lg xl:text-2xl text-xl'>Edit send do eiusmod tempar and incididunt
         imagna ad minim veniam quis nastruci,        
    </p>
     <span> <button className='rounded-full mb-4 py-1 xl:text-2xl xl:p-2 xl:px-8 px-4 mt-4 bg-[#fdd368] '>Discover </button></span></div>
<div>
<div className=' sm:h-440 bg-gradient-to-br from-[#000000] mx-auto  max-md:h-[302px]  content-center  via-[rgb(199,158,55)]     to-[#000000] shrink-0  rounded-full md:h-[402px] xl:h-[540px]  md:w-116   aspect-square    justify-center   md:m-112 '>
<Image src={hero} className=" md:h-[402px] lg:h-[402px] xl:h-[402px]    2xl:h-[602px]     mix-blend-overlay  justify-center   "/>
</div></div>
</div>
    </div>

  )}
  export default home 