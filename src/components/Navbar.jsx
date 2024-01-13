import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <>
  <div className="flex flex-row justify-between m-6">
    <div className="flex flex-row items-center">
    <button className='mx-2'><img src={logo} alt='logo' className='h-10' /></button>
    <span className="text-gray-300">/</span>
    <button className='mx-2'>Chatbots</button>
    <span className="text-gray-300">/</span>
    <button className='mx-2 font-medium'>MyBot</button>
    
    </div>

    <div className="flex flex-row items-center">
      <button  className='mx-3 font-medium text-sm text-gray-500 hover:text-gray-700'>Help</button>
      <button  className='mx-3 font-medium text-sm text-gray-500 hover:text-gray-700'>Account →</button>
    </div>
  </div>

  <div className='flex flex-row justify-center border-b-[1px] border-gray-300'>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600' >Chatbot</button>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Settings</button>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Dashboard</button>
    <a href='/' className='mx-4 pb-2 font-medium text-gray-700 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-purple-600 focus:border-b-purple-600'>Sources</a>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Integrations<span class="mx-1 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset rounded-xl ring-purple-700/10">New</span></button>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Embed on site</button>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Share</button>
    <button  className='mx-4 pb-2 font-medium text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Delete</button>


  </div>
    </>
  )
}

export default Navbar;