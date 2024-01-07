require('dotenv').config({ path: "../.env" });
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3002;


const notionClientId = process.env.REACT_APP_NOTION_CLIENT_ID;
const notionClientSecret = process.env.REACT_APP_NOTION_CLIENT_SECRET;


const redirectUri = 'http://localhost:3000';

const encoded = Buffer.from(`${notionClientId}:${notionClientSecret}`).toString("base64");

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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
    data: { filter: { property: "object", value: "database" } },
  });

  const str=JSON.stringify(data?.results);
  // console.log("Sending front :",str);
  res.send(str);
});






