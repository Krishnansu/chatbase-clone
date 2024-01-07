import React from 'react';
import { notion } from '../../assets';
import NotionData from './NotionData';
import { useEffect, useState } from "react";

const oauth_client_id = "b352e988-86e4-464b-83eb-baac3b8d43f0";

const Notion = () => {
  const [dbs, setdbs] = useState('');
  const [display, setDisplay] = useState(true);
  // When you open the app, this doesn't do anything, but after you sign into Notion, you'll be redirected back with a code at which point we call our backend.
  useEffect(() => {
    const params = new URL(window.document.location).searchParams;
    const code = params.get("code");
    console.log(code);
    if (!code) return;
    fetch(`http://localhost:3002/login/${code}`).then(async (resp) => {
      const res=await resp.json();
      // console.log(res[0]);
      const ob=res[0];
      // console.log(ob);
      const str=JSON.stringify(ob);
      console.log(str);
      setdbs(str);
      setDisplay(false);
      console.log("FRONT",dbs);
    });
    
  }, []);
  return (
    <>
      <h1 className='p-3 font-semibold text-xl'>Notion</h1>
      <div className='border-t border-gray-300'>
        {
          display ? 
          <div className='flex flex-row justify-center my-[10%]'>
            <a href={'https://api.notion.com/v1/oauth/authorize?client_id=b352e988-86e4-464b-83eb-baac3b8d43f0&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000'}
            className='flex flex-row items-center border border-gray-100 shadow-sm shadow-gray-200 hover:bg-gray-200 rounded-md pl-4 pr-2 font-medium'>
              <img src={notion} alt="logo" className='h-[60%] '/>
              <span>Connect Notion</span>
            </a>
          </div>
        :
          <div className='p-4 my-8 mx-4 flex flex-row justify-center'>
                <p className='break-all'>{dbs}</p>
          </div>
        }
        
       
      </div>
      {/* <NotionData /> */}
    </>
  )
}

export default Notion;



// The OAuth client ID from the integration page!


// function App() {
  

//   return (
//     <div>
//       <a
//         style={{ display: "block" }}
//         href={`https://api.notion.com/v1/oauth/authorize?client_id=${oauth_client_id}&response_type=code&owner=user`}
//       >
//         Connect to Notion
//       </a>
      // {dbs.map((db) => (
      //   <div
      //     style={{
      //       display: "inline-flex",
      //       whiteSpace: "pre",
      //       border: "1px solid black",
      //       marginBottom: 10,
      //     }}
      //   >
      //     {JSON.stringify(db, null, 2)}
      //   </div>
      // ))}
//     </div>
//   );
// }

// export default App;