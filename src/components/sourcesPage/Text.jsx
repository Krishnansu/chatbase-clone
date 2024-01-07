import React from 'react';

const Text = () => {
  return (
    <>
      <h1 className='p-3 font-semibold text-xl'>Text</h1>
      <div className='border border-gray-300 py-3'>
      <textarea rows={14} className="resize-y rounded-md w-[90%] p-2 m-4 border border-gray-300 shadow-sm font-normal text-sm focus:outline-none focus:border-2 focus:shadow-md focus:border-purple-400 focus:shadow-purple-200" placeholder='data'></textarea>
      <p className='flex flex-row justify-center text-sm font-normal text-gray-500'>4 characters</p>
      </div>
      
    </>
  )
}

export default Text;