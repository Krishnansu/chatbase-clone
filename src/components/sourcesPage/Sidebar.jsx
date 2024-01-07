import React from 'react';
import { useState } from 'react';
import {filesGray,filesPurple,websiteGray,websitePurple,textGray,textPurple,qnaGray,qnaPurple,notionGray,notionPurple} from "../../assets";

import {Files,Text,Website,Qna,Notion} from "../sourcesPage";

const Sidebar = () => {

  const [display, setDisplay] = useState(true);
  const [dbs, setdbs] = useState('');

    const [option, setOption] = useState({
        "files": false,
        "text": false,
        "website": false,
        "qna": false,
        "notion": true
      });
      
      const clickHandler = (data) => {
        console.log(data);
        if (data === "files") {
          setOption({
            ...option,
            files: true,
            text: false,
            website: false,
            qna: false,
            notion: false
          });

        } else if (data === "text") {
          setOption({
            ...option,
            files: false,
            text: true,
            website: false,
            qna: false,
            notion: false
          });
        } else if (data === "website") {
          setOption({
            ...option,
            files: false,
            text: false,
            website: true,
            qna: false,
            notion: false
          });
        } else if (data === "qna") {
          setOption({
            ...option,
            files: false,
            text: false,
            website: false,
            qna: true,
            notion: false
          });
        } else if (data === "notion") {
          setOption({
            ...option,
            files: false,
            text: false,
            website: false,
            qna: false,
            notion: true
          });
        }
      };
      
  return (
    <>
        <div className='flex flex-row justify-evenly mt-8 mx-10'>
            <div className='flex flex-col w-[10%]'>
                <h1 className='text-black text-3xl font-bold mb-3'>Sources</h1>

                <button onClick={() => clickHandler("files")} className='flex flex-row my-2 items-center'>
                {option.files ?
                 <>
                    <img src={filesPurple} alt='icon' className='h-5 w-5'/>
                    <span className='mx-3 text-purple-600 font-medium'>Files</span>
                 </> 
                 : 
                 <>
                    <img src={filesGray} alt='icon' className='h-5 w-5'/>
                    <span className='mx-3 text-gray-500 font-medium'>Files</span>
                 </>
                 }
                
                </button>

                <button onClick={() => clickHandler("text")} className='flex flex-row my-2 items-center'>
                  {option.text ?
                    <>
                      <img src={textPurple} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-purple-600 font-medium'>Text</span>
                    </> 
                    : 
                    <>
                      <img src={textGray} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-gray-500 font-medium'>Text</span>
                    </>
                  }
                </button>

                <button onClick={() => clickHandler("website")} className='flex flex-row my-2 items-center'>
                  {option.website ?
                    <>
                      <img src={websitePurple} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-purple-600 font-medium'>Website</span>
                    </> 
                    : 
                    <>
                      <img src={websiteGray} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-gray-500 font-medium'>Website</span>
                    </>
                  }
                </button>

                <button onClick={() => clickHandler("qna")} className='flex flex-row my-2 items-center'>
                  {option.qna ?
                    <>
                      <img src={qnaPurple} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-purple-600 font-medium'>Q&A</span>
                    </> 
                    : 
                    <>
                      <img src={qnaGray} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-gray-500 font-medium'>Q&A</span>
                    </>
                  }
                </button>

                <button onClick={() => clickHandler("notion")} className='flex flex-row my-2 items-center'>
                  {option.notion ?
                    <>
                      <img src={notionPurple} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-purple-600 font-medium'>Notion</span>
                    </> 
                    : 
                    <>
                      <img src={notionGray} alt='icon' className='h-5 w-5'/>
                      <span className='mx-3 text-gray-500 font-medium'>Notion</span>
                    </>
                  }
                </button>


                {/* <button onClick={() => clickHandler("text")} className='flex flex-row my-2 items-center'>
                <img src={textGray} alt='icon' className='h-5 w-5'/>
                <span className='mx-3 text-gray-500 font-medium'>Text</span>
                </button>

                <button onClick={() => clickHandler("website")} className='flex flex-row my-2 items-center'>
                <img src={websiteGray} alt='icon' className='h-5 w-5'/>
                <span className='mx-3 text-gray-500 font-medium'>Website</span>
                </button>

                <button onClick={() => clickHandler("qna")} className='flex flex-row my-2 items-center'>
                <img src={qnaGray} alt='icon' className='h-6 w-6'/>
                <span className='mx-3 text-gray-500 font-medium'>Q&A</span>
                </button>

                <button onClick={() => clickHandler("notion")} className='flex flex-row my-2 items-center'>
                <img src={notionGray} alt='icon' className='h-7 w-7'/>
                <span className='mx-2 text-gray-500 font-medium'>Notion</span>
                </button> */}

            </div>
            <div className='flex flex-col border border-gray-300 w-[50%] mt-14 mb-4'>
              {option.files ? <Files /> : null}
              {option.text ? <Text /> : null}
              {option.website ? <Website /> : null}
              {option.qna ? <Qna /> : null}
              {option.notion ? <Notion display={display} setDisplay={setDisplay} dbs={dbs} setdbs={setdbs}/> : null}
              

                {/* <Files />
                <Text />
                <Website />
                <Qna />
                <Notion /> */}
            </div>
            <div className='flex flex-col justify-around border border-gray-300 mt-14 w-[20%] p-3 h-[80%]'>
                <h1 className='font-semibold text-lg flex flex-row justify-center'>Sources</h1>
                <div>
                    <div className='my-4'>
                        <p className='font-normal text-gray-500 '>1 File (9,301 chars)</p>
                        <p className='font-normal text-gray-500 '>4 text input chars</p>
                        <p className='font-normal text-gray-500 '>7 Links (4,549 detected chars)</p>
                        <p className='font-normal text-gray-500 '>1 Q&A (0 chars)</p>
                    </div>
                    
                    <p className="font-medium"><span>Total detected characters</span></p>
                    <p className="flex flex-row justify-center"><span className='font-semibold text-gray-800'>4549</span><span className='font-normal text-gray-400'>/ 400,000 limit</span></p>
                </div>
                <button className='bg-black p-1 text-white font-medium text-base rounded-md w-full mt-4'>Train Chatbot</button>
            </div>
        </div>
    </>
  )
}

export default Sidebar;