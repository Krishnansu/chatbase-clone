import React from 'react';
import { useEffect, useState } from 'react';
import { getData } from '../../services/api';
import NotionCard from './NotionCard';

const NotionData = () => {
    const [notion, setNotion] = useState([])

    const getAllData = async()=>{
      const res = await getData();
      console.log("Calling",res)
      setNotion(res.data.results)
    }
  
    useEffect(()=>{
      getAllData()
    },[])

  return (
    <div className='justify-center p-8 '>
        <h1 className='text-center border-b-[1px] border-gray-300 leading-[0.1em] mt-8 mx-6 mb-8'><span className="bg-white pb-[10px] px-2">Data Received</span></h1>
       <NotionCard ob={JSON.stringify(notion)}/>
    </div>
  );
}

export default NotionData;