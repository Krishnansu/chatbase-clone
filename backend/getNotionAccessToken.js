const notionClientId = 'b352e988-86e4-464b-83eb-baac3b8d43f0';

// The OAuth client secret from the integration page!
const notionClientSecret = 'secret_cQs7jJEEclBnlUyJzubHWInIEMzG8GwZTwbHow0wdO1';

export async function getAccessToken(code){
    fetch('https://api.notion.com/v1/oauth/token',{
        method: 'post',
        auth: {username: notionClientId, password: notionClientSecret},
        headers: {'Content-Type': 'application/json'},
        data: {code, grant_type: "authorization_code"},
    });
}