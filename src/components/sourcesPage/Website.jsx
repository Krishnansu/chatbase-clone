import React from 'react';
import { trash } from '../../assets';

const Website = () => {
  return (
    <>
      <h1 className='p-3 font-semibold text-xl'>Website</h1>
      <div className='border border-gray-300 p-4'>
        <h1 className='font-medium text-base text-gray-700'>Crawl</h1>
        <div className='flex flex-row my-3 justify-evenly'>
          <input className='border border-gray-300 rounded-md p-2  w-[60%]' placeholder='https://www.example.com'></input>
          <button className='bg-black p-2 text-white font-medium text-sm rounded-md  w-[30%]'>Fetch more links</button>
        </div>
        <p className='font-normal text-sm text-gray-500'>This will crawl all the links starting with the URL (not including files on the website).</p>

        <h1 className='w-full text-center border-b-[1px] border-gray-300 leading-[0.1em] mt-8 mx-0 mb-[20px]'><span className="bg-white pb-[10px] px-2">OR</span></h1>

        <h1 className='font-medium text-base text-gray-700'>Submit Sitemap</h1>
        <div className='flex flex-row my-3 justify-evenly'>
          <input className='border border-gray-300 rounded-md p-2  w-[60%]' placeholder='https://www.example.com/sitemap.xml'></input>
          <button className='bg-black p-2 text-white font-medium text-sm rounded-md  w-[30%]'>Load additional sitemap</button>
        </div>

        <h1 className='w-full text-center border-b-[1px] border-gray-300 leading-[0.1em] mt-8 mx-0 mb-[20px]'><span className="bg-white pb-[10px] px-2">Included Links</span></h1>

        <div className='flex flex-row-reverse mb-4'>
          <button className="text-red-500 border border-red-500 p-2 rounded-lg font-medium hover:bg-red-100">Delete all</button>
        </div>
        <div className='flex flex-row justify-evenly items-center my-2'>
            <div className="group relative w-[20%]" >
              <button className='items-center justify-between rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>Trained &#9432;</button>
              <span
                className="pointer-events-none absolute -top-12 -left-24 w-max opacity-0 transition-opacity group-hover:opacity-100 text-sm font-normal bg-white shadow-md border p-2 border-gray-300 rounded-md">
                Your chatbot has been trained on this source.
              </span>
            </div>
            <input type="url" defaultValue="https://organ-hub-dehc.onrender.com/" className='border border-gray-300 rounded-md w-[60%] text-base'></input>
            <p className='font-normal text-base text-gray-500'>5123</p>
            <button><img src={trash} alt="trash" className='h-4 w-4' /></button>
        </div>
        
      
      </div>
    </>
  )
}

export default Website;