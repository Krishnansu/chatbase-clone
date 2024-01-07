import React, { useState } from 'react'

const NotionCard = ({ob}) => {
    console.log(ob);
    // const data= JSON.parse(ob);
    // console.log(data[0].properties.Name.title[0].plain_text.toString());

  return (
    <>
        <p className='text-wrap text-sm break-all'>
            {ob}
        </p>
    </>
  )
}

export default NotionCard;