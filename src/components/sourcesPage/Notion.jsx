import React from 'react';
import { notion } from '../../assets';

const Notion = () => {
  return (
    <>
      <h1 className='p-3 font-semibold text-xl'>Notion</h1>
      <div className='border-t border-gray-300'>
        <div className='flex flex-row justify-center my-[10%]'>
            <button className='flex flex-row items-center border border-gray-100 shadow-sm shadow-gray-200 hover:bg-gray-200 rounded-md pl-4 pr-2 font-medium'>
              <img src={notion} alt="logo" className='h-[60%] '/>
              <span>Connect Notion</span>
            </button>
        </div>
      </div>
    </>
  )
}

export default Notion;