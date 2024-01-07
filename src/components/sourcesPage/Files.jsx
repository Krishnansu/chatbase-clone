import React from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { uploadIcon } from '../../assets';
import { files } from '../../data/files';
import { trash } from '../../assets';

const fileTypes = ["JPEG", "PNG", "GIF"];

const Files = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>

    <h1 className='p-3 font-semibold text-xl'>Files</h1>
    <div className='border-t border-gray-300'>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        children = 
        <div className='flex flex-col items-center border border-gray-300 p-16 m-4'>
          <img src={uploadIcon} alt="icon" className='h-4 w-4 mb-4'/>
          <p className='font-normal text-gray-500'>Drag & drop files here, or click to select files</p>
          <p className='font-normal text-gray-500 text-sm'>Supported File Types: .pdf, .doc, .docx, .txt</p>
        </div>
      />
      <p className='flex flex-row justify-center mb-8 text-gray-500'>{file ? `File name: ${file[0].name}` : "If you are uploading a PDF, make sure you can select/highlight the text."}</p>
      </div>

      <h1 className='text-center border-b-[1px] border-gray-300 leading-[0.1em] mt-8 mx-6 mb-[20px]'><span className="bg-white pb-[10px] px-2">Included Links</span></h1>
      {files.map((file,index)=>(
        <>
          <div className='flex flex-row justify-between my-2 ml-6 mr-10'>
            <p className=''>{file} <span className='text-sm text-gray-500'>(3,107 chars)</span></p>
            <button><img src={trash} alt="trash" className='h-4 w-4' /></button>
          </div>
        </>
      ))}
      

    </>
  )
}

export default Files;