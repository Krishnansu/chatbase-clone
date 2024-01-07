import React from 'react';
import { trash } from '../../assets';

const Qna = () => {
  return (
    <>
      <h1 className='p-3 font-semibold text-xl'>Q&A</h1>
      <div className='border-t border-gray-300'>
        <div className='flex flex-row-reverse m-4'>
          <button className="text-red-500 border border-red-500 p-1 rounded-lg font-medium hover:bg-red-100">Delete all</button>
        </div>
        <div className='flex flex-col border border-gray-300 m-6 pb-4 shadow-lg rounded-md'>
          <div className='flex flex-row-reverse my-5 mx-6'>
            <button><img src={trash} alt="trash" className='h-4 w-4' /></button>
          </div>
          <div className='mx-4'>
            <h1 className='text-sm text-gray-500'>Question</h1>
            <textarea className='my-2 resize-y rounded-lg w-full p-3 border border-gray-300 shadow-md shadow-gray-200 font-normal text-sm 
            focus:outline-purple-400 ' rows={4}></textarea>
          </div>
          <div className='mx-4'>
            <h1 className='text-sm text-gray-500'>Answer</h1>
            <textarea className='my-2 resize-y rounded-lg w-full p-3 border border-gray-300 shadow-md shadow-gray-200 font-normal text-sm 
            focus:outline-purple-400 ' rows={8}></textarea>
          </div>
        </div>
        <div className='flex flex-row-reverse m-6'>
          <button className="text-gray-800 bg-gray-200 hover:bg-gray-300 p-2 rounded-lg font-medium">Add</button>
        </div>
      </div>
    </>
  )
}

export default Qna;