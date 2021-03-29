import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import useSWR from 'swr'
import {useRouter} from'next/router'
import { Box, Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import MetaData from '../Components/MetaData';
//const urlMetadata = require('url-metadata');




export default function meta() {
  const [metaData, setMetaData] = useState({title:" ", description:" ", image:" ", url:" "});
  
  
  //next router to get query obj
  const router = useRouter();
  const { url } = router.query;
  console.log(url);

    // useEffect(() => {
    //   getMetaData(url).then(e=> {
    //     setShowError(false);
    //     setMetaData(e);
    //   }).catch((e)=>{
    //     setShowError(true);
    //     console.log("inside useEffect : ",e);
    //   });
    // }, [])

  //Header Code Start
  const [address, setAddress] = useState("");

  const submitOnEnter = (e) => {
    if(e.keyCode == 13){
    
    }
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }
  //Header Code End

  
  
  

  const submitHandler = (address) => {
    if (address.includes("http://")) {
      getMetaData(address).then(e=> {
        setShowError(false);
        setMetaData(e);
      }).catch((e)=>{
        console.log("inside submit handler : ",e);
        setShowError(true);
      });
    } else if(address.includes("https://")) {
      getMetaData(address).then(e=> {
        setShowError(false);
        setMetaData(e);
      }).catch((e)=>{
        console.log("inside submit handler : ",e);
        setShowError(true);
      });
    }else getMetaData("https://"+address).then(e=> {
      setShowError(false);
      setMetaData(e);
    }).catch((e)=>{
      console.log("inside submit handler : ",e);
      setShowError(true);
    });
    getMetaData().then(e=> {setMetaData(e)});
  }

  const getMetaData = async (url) => {
    console.log("inside method:",url);
    const res = await fetch(`/api/hello?url=${url}`);
    if(res.ok == false) throw new Error("Something went wrong!! Please try again.") 
    const data = await res.json();
    console.log(data);
    return data.Data;
  }

  return (
    <>
    <div className="lg:container mx-auto">
      <div id="Header" className="mt-8 flex flex-col items-center sm:flex-row justify-evenly">
        <Link href="/"><a><h1 className="font-bold text-4xl p-3 sm:text-6xl text-indigo-600">Meta Tags</h1></a></Link>
        <div className="inline-flex h-8 sm:h-10">
          <input id="input" type="text" placeholder="Website Address" value={address} className="w-44 md:w-56 pl-3 outline-none rounded-l-3xl border-2 hover:border-indigo-400 focus:border-indigo-600" onChange={handleAddress} onKeyDown={(e)=>submitOnEnter(e)} />
          <Link href={"/meta?url="+address}><a type="button" id="inputButton" className="cursor-pointer bg-indigo-400 w-10 hover:bg-indigo-600" onClick={submitHandler}>
            <svg className="mx-auto mt-1 sm:mt-2" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 28 27">
            <g fill="#FFF">
              <path d="M27.5 12.1L16.8 0.6C16.1 0 14.7-0.3 13.9 0.5 13.1 1.2 13.1 2.7 13.9 3.4L21.4 11.5 2 11.5C0.9 11.5 0 12.4 0 13.5 0 14.6 0.9 15.5 2 15.5L21.4 15.5 13.9 23.6C13.2 24.3 13.1 25.8 13.9 26.5 14.7 27.3 16.1 27 16.8 26.4L27.5 14.9C27.8 14.5 28 14 28 13.5 28 13 27.8 12.5 27.5 12.1Z"></path>
            </g>
            </svg>
          </a></Link>
        </div>
      </div>
      <div id="Content" className="m-5 sm:m-2 grid grid-cols-5 gap-10">
        <div className="col-span-5 sm:col-span-5 lg:col-span-1">Ad here</div>
        <div className="col-span-5 sm:col-span-3 lg:col-span-3">
          
          <div className="my-10 rounded-xl">
          <MetaData url={url} />
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">Ad here</div>
      </div>
    </div> 
    </>
  )
};



// This gets called on every request
export async function getStaticProps(context) {
  
  // const input = context.query.url;
  // if (input.includes("http://")) {
  //   return {props:{url:input}}
  // } else if(input.includes("https://")) {
  //   return {props:{url:input}}
  // }else return {props:{url:`https://${input}`}}
  
  return { props:{}}
}


