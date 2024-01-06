import React from 'react';
import { chatbaseLogo, logo } from '../assets';

const Navbar = () => {
  return (
    <>
  <div className="flex flex-row justify-between m-6">
    <div className="flex flex-row items-center">
    <a href='#' className='mx-2'><img src={logo} alt='logo' className='h-10' /></a>
    <span className="text-gray-300">/</span>
    <a href='#' className='mx-2'>Chatbots</a>
    <span className="text-gray-300">/</span>
    <a href='#' className='mx-2'>MyBot</a>
    
    </div>

    <div className="flex flex-row items-center">
      <a href="#"  className='mx-2'>Help</a>
      <a href="#"  className='mx-2'>Account →</a>
    </div>
  </div>

  <div className='flex flex-row justify-center border-b-[1px] border-gray-300'>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600' >Chatbot</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Settings</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Dashboard</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-700 focus:text-gray-700 border-b-[3px] border-purple-600 focus:border-b-purple-600'>Sources</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Integrations</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Embed on site</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Share</a>
    <a href="#"  className='mx-4 pb-2 font-medium text-gray-500 focus:text-gray-700 border-b-[3px] border-transparent focus:border-b-purple-600'>Delete</a>


  </div>
    </>
  )
}

export default Navbar;