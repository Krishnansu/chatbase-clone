// pages/notion-callback.js
import { useRouter } from "next/router";
import NotionCallbackComponent from "./NotionCallbackComponent.jsx";

const notionClientId = 'b352e988-86e4-464b-83eb-baac3b8d43f0';
const notionClientSecret = 'secret_cQs7jJEEclBnlUyJzubHWInIEMzG8GwZTwbHow0wdO1';

const NotionCallbackPage = ({ response }) => {
  return <NotionCallbackComponent response={response} />;
};

export async function getServerSideProps({ query }) {
  try {
    const code = query.code;
    const res = await fetch('https://api.notion.com/v1/oauth/token', {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa(notionClientId + ":" + notionClientSecret),
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000'
      }),
    });

    const response = await res.json();
    return { props: { response } };
  } catch (error) {
    console.error("Error fetching Notion OAuth token:", error);
    return { props: { response: null } };
  }
}

export default NotionCallbackPage;
