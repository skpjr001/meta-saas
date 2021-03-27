import React from 'react';
import Link from 'next/link'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const urlMetadata = require('url-metadata');

export default function meta({data}) {

  function Error() {
    return(
      <h1 className="p-2 text-xl font-semibold bg-red-400">Something went wrong!! Check Website Address and Enter Again. </h1>
    )
  }
  
  function Data() {
    return(
      <>
        <h1 className="py-3 text-Base font-bold text-gray-600">Title</h1>
        <p>{data.title}</p>
        <h1 className="py-3 text-Base font-bold text-gray-600">Image Source</h1>
        <p>{data.image}</p>
        <h1 className="py-3 text-Base font-bold text-gray-600">Description</h1>
        <p>{data.description}</p>
        <h1 className="py-3 text-Base font-bold text-gray-600">Url</h1>
        <p>{data.url}</p>
      </>
    )
  }

  return (
    <>
    <div className="lg:container mx-auto">
    <Header headerBar="true"/>
      <div className="m-1 sm:m-0 grid grid-cols-5">
        <div className="col-span-5 sm:col-span-5 lg:col-span-1">Ad here</div>
        <div className="col-span-5 sm:col-span-3 lg:col-span-3 mx-2">
          
          <div className="mt-10 rounded-xl min-h-full overflow-x-auto">
          {data?<Data/>:<Error/>}
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">Ad here</div>
      </div>
    </div> 
    <Footer position={!data?"absolute":"relative"}/>
    </>
  )
};



// This gets called on every request
export async function getServerSideProps(context) {
  
  const input = context.query.url;

  if(input.includes("http://")){
    try {
      const data = await urlMetadata(input);
      // Pass data to the page via props
      return { props: { data } };
    } catch (error) {
      // Pass data to the page via props
      return { props: { error:"error" } };
    }

  } else if(input.includes("https://")){
    try {
      const data = await urlMetadata(input);
      // Pass data to the page via props
      return { props: { data } };
    } catch (error) {
      // Pass data to the page via props
      return { props: { error:"error" } };
    }

  }else{
    const url =`https://${input}`;
    try {
      const data = await urlMetadata(url);
      // Pass data to the page via props
      return { props: { data } };
    } catch (err) {
      // Pass data to the page via props
      return {props:{ error:err.code }}
    }
    
  }
}


