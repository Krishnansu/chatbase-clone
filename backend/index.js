const fetch = require('node-fetch');
//import fetch from 'node-fetch';
require('dotenv').config({ path: "../.env" });
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3002;


const notionClientId = process.env.REACT_APP_NOTION_CLIENT_ID;
const notionClientSecret = process.env.REACT_APP_NOTION_CLIENT_SECRET;


const redirectUri = 'https://chatbase-clone.netlify.app/';

// const encoded = Buffer.from(`${notionClientId}:${notionClientSecret}`).toString("base64");

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// recursive function to get all nested blocks in a flattened array format
// async function getSubBlocks(blockId,NOTION_API_KEY) {
//   const url = `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`;
//   let options = {
//     async: true,
//     crossDomain: true,
//     method: 'get',
//     headers: {
//       Authorization: `Bearer ${NOTION_API_KEY}`,
//       'Notion-Version': '2022-02-22',
//       'Content-Type': 'application/json',
//     },
//   };

//   const response = await fetch(url, options);
//   console.log("url -> ",url);
//   const r = await response.json();

//   let blocks = r.results;
//   // guard clause ends the function if the array is empty
//   if (blocks && blocks.length === 0) {
//     return undefined;
//   }

//   // for each block objects, check for children blocks in a recursive manner
//   for (const block of blocks) {
//       const subBlocks = await getSubBlocks(block.id,NOTION_API_KEY)
//       if (subBlocks) blocks = [...blocks, ...subBlocks]
//   }

//   return blocks;
// }

async function getSubBlocks(blockId, NOTION_API_KEY) {
  const url = `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`;
  let options = {
    async: true,
    crossDomain: true,
    method: 'get',
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  console.log("url -> ",url);
  const r = await response.json();

  let blocks = r.results;
  // guard clause ends the function if the array is empty
  if (blocks && blocks.length === 0) {
    return undefined;
  }

  // Use Promise.all to wait for all recursive calls to resolve
  const subBlocksPromises = blocks.map(async (block) => {
    return getSubBlocks(block.id, NOTION_API_KEY);
  });

  const subBlocks = await Promise.all(subBlocksPromises);

  // Flatten the array of arrays
  return blocks.concat(...subBlocks);
}



//const res = getSubBlocks(testBlock)

app.get("/login/:code", async (req, res) => {
  const { code } = req.params;
    // console.log("GET",code);


//   Generate an access token with the code we got earlier and the client_id and client_secret we retrived earlier
  const resp = await axios({
    method: "POST",
    url: "https://api.notion.com/v1/oauth/token",
    auth: { username: notionClientId, password: notionClientSecret },
    headers: { "Content-Type": "application/json" },
    data: { code: code, grant_type: "authorization_code",redirect_uri: redirectUri },
  });
// console.log("Response:",resp.data);

  const { data } = await axios({
    method: "POST",
    url: "https://api.notion.com/v1/search",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resp.data.access_token}`,
      "Notion-Version": "2022-02-22",
    },
    //data: { filter: { property: "object", value: "database" } },
  });

  const datum=data.results;
  console.log(datum);
  for (let i = 0; i < datum.length; i++) {
    if(datum[i].object==="page")
    {
      console.log(i," -> ",datum[i].id);
      const child = getSubBlocks(datum[i].id,resp.data.access_token);
      console.log(child);
      if(child !== undefined)
      {
          datum[i].childArray=child;
      }
    }
  }
  
  const str=JSON.stringify(datum);
  //const str=JSON.stringify(data?.results);
  // console.log("Sending front :",str);
  res.send(str);
});






