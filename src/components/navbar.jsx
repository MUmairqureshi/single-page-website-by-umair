import React from 'react' 
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DehazeIcon from '@mui/icons-material/Dehaze'
const navbar = () => {
  return (




 

<nav class="bg-black px-2 sm:px-4 py-2.5      fixed w-full z-20 top-0 left-0    ">
  <div class="container mt-2 flex flex-wrap  items-center justify-between mx-auto border-b-2 border-[#8bf5bb]">
 
 
      <span class="self-center font-bold text-2xl   whitespace-nowrap   text-[#cea234]">Logo</span>
   <div class="flex gap-2 md:order-2">
<div className="md:flex gap-2 hidden">   <button className=' text-black  md:visible invisible   p-1 rounded-full    md:font-large bg-[#cea234]'>    
<SearchOutlinedIcon className='' fontSize='large'  />
</button> 
<p className=' text-black  md:visible invisible   p-1 rounded-full    md:font-large bg-[#cea234]'> <LanguageOutlinedIcon    fontSize='large'/></p>
</div> <button type="button" class="text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-[#d6b153]  "> Rigisterd/Login</button>
     

      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center   text-sm  p-2 text-black      rounded-full  bg-[#cea234]       md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">


        <DehazeIcon />
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <div className="md:items-center text-black justify-between   md:flex md:w-auto " >
    <ul className="flex flex-col p-4 mt-4      md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <div className="block p-2 text-black      rounded-full  bg-[#cea234]      " aria-current="page">
<DehazeIcon fontSize='large'/>

        </div>
      </li>
      
    </ul>
  </div>
  </div>  </div>
</nav>

 
  )
}

export default navbar ;