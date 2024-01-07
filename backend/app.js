const express = require('express');
const {Client} = require('@notionhq/client');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const port = process.env.PORT || 8000;
require('dotenv').config();

const app = express();
app.use(cors());

const authToken = process.env.NOTION_INTEGRATION_TOKEN;
const notionDbID = process.env.NOTION_DATABASE_ID;
const notion = new Client ({auth: authToken});

app.post('/NotionAPIPost', jsonParser, async(req, res) => {
    const {Mobile, Email, Name} = req.body;

    try { 
        const response = await notion.pages.create({
            parent: {
                database_id: notionDbID,
            },
            properties: {
                Mobile: {
                    title: [
                        {
                            text: {
                                content: Mobile
                            },
                        },
                    ],
                },
                Email: {
                    rich_text: [
                        {
                            text: {
                                content: Email
                            },
                        },
                    ],
                },
                Name: {
                    rich_text: [
                        {
                            text: {
                                content: Name
                            },
                        },
                    ],
                },
            },
        });

        res.send(response);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
});

app.get('/NotionAPIGet', async(req, res) => {
    try { 
        const response = await notion.databases.query({
            database_id: notionDbID, 
            sorts: [
                {
                    timestamp: 'created_time',
                    direction: 'descending',
                },
            ]
        });

        res.send(response);
        // const {results} = response;
        // console.log("success");
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log('server listening on port 8000!');
});
