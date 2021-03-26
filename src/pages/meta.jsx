import React from 'react';
const urlMetadata = require('url-metadata');

export default function meta({data}) {
  console.log(data);
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.image}</p>
      <p>{data.description}</p>
      <p>{data.url}</p>
    </div>
  )
};

// This gets called on every request
export async function getServerSideProps(context) {
  
  const input = context.query.url;

  if(input.includes("http://")){

    const data = await urlMetadata(input);
    // Pass data to the page via props
    return { props: { data } };

  } else if(input.includes("https://")){

    const data = await urlMetadata(input);
    // Pass data to the page via props
    return { props: { data } };

  }else{
    const url =`https://${input}`;
    const data = await urlMetadata(url);
    // Pass data to the page via props
    return { props: { data } };
  }
}


