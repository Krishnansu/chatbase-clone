import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "./getNotionAccessToken";
const notionClientId = 'b352e988-86e4-464b-83eb-baac3b8d43f0';

// The OAuth client secret from the integration page!
const notionClientSecret = 'secret_cQs7jJEEclBnlUyJzubHWInIEMzG8GwZTwbHow0wdO1';

export default function NotionCallback({response}) {
    const router = useRouter();
    // const { code } = router.query;

    // useEffect(() => {
    //     if(code) getAccessToken(code);
    // }, [code]);

    console.log(response);

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">HEYYY</h1>
                {/* <input value={response}></input> */}
            </div>
        </>
    );
  }

  export async function getServerSideProps(resolvedUrl){
    try{
        const code= resolvedUrl.query.code
        
        const res=await fetch('https://api.notion.com/v1/oauth/token',{
            method: 'post',
            headers: new Headers({
                'Authorization': 'Basic' + btoa(notionClientId + ":" + notionClientSecret),
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'http://localhost:3000'

            }),
        });

        const response = await res.json();
        return {props: {response}};
    }
    catch{
        console.log("Error");
    }
  }