const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3002;

const notionClientId = 'b352e988-86e4-464b-83eb-baac3b8d43f0';
const notionClientSecret = 'secret_cQs7jJEEclBnlUyJzubHWInIEMzG8GwZTwbHow0wdO1';

const redirectUri = 'http://localhost:3000';

const encoded = Buffer.from(`${notionClientId}:${notionClientSecret}`).toString("base64");

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/login/:code", async (req, res) => {
  const { code } = req.params;
    console.log("GET",code);

    // try {
    //     const axiosResponse = await axios.post("https://api.notion.com/v1/oauth/token", {
    //       grant_type: "authorization_code",
    //       code: code,
    //       redirect_uri: redirectUri,
    //     }, {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         Authorization: `Basic ${encoded}`,
    //       },
    //     });
    
    //     const data = axiosResponse.data;
    //     console.log("AXIOS Data",data);
    //     res.status(200).json(data);
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: "Internal Server Error" });
    //   }

    //     const response = await fetch("https://api.notion.com/v1/oauth/token", {
    //     method: "POST",
    //     headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Basic ${encoded}`,
    //         },
    //     body: JSON.stringify({
    //         grant_type: "authorization_code",
    //         code: code,
    //         redirect_uri: redirectUri,
    //     }),
    // });

    // console.log(response);
    // res.json({response});

//   Generate an access token with the code we got earlier and the client_id and client_secret we retrived earlier
  const resp = await axios({
    method: "POST",
    url: "https://api.notion.com/v1/oauth/token",
    auth: { username: notionClientId, password: notionClientSecret },
    headers: { "Content-Type": "application/json" },
    data: { code: code, grant_type: "authorization_code",redirect_uri: redirectUri },
  });
console.log("Response:",resp.data);
//   // You want to save resp.data.workspace_id and resp.data.access_token if you want to make requests later with this Notion account (otherwise they'll need to reauthenticate)

//   // Use the access token we just got to search the user's workspace for databases
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
  console.log("Sending front :",str);
  res.send(str);
});






