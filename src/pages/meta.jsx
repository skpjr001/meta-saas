import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from'next/router'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
//const urlMetadata = require('url-metadata');

export default function meta({url}) {
  const [metaData, setMetaData] = useState({title:"",description:"",image:"",url:""});
  const [showError, setShowError] = useState(false);
  const router = useRouter();
    useEffect(() => {
      getMetaData(url).then(e=> {setMetaData(e)}).catch((e)=>{
        setShowError(true);
        console.log("inside useEffect : ",e);
      });
    }, [])

  function ErrorComponent() {
    return(
      <h1 className="p-2 text-xl font-semibold bg-red-400">Something went wrong!! Check Website Address and Enter Again. </h1>
    )
  }
  
  function DataComponent() {
    return(
      <>
      <div className="mb-10 sm:mb-16">
        <h1 className="text-3xl font-bold text-gray-600">Title</h1>
        <p className="mt-1 mb-4 text-gray-400">Your website’s “name”. While it should be a bit descriptive, try to limit it at 50 characters.</p>
        <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
          "{metaData.title}
        </p>
      </div>
      <div className="mb-10 sm:mb-16">
        <h1 className="text-3xl font-bold text-gray-600">Image Source</h1>
        <p className="mt-1 mb-4 text-gray-400">This image is the first thing people will see when someone shares your website. Make sure it stands out. Sometimes social websites fallback to a random image from your website, so this is quite important.</p>
        <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
          "{metaData.image}
        </p>
      </div>
      <div className="mb-10 sm:mb-16">
        <h1 className="text-3xl font-bold text-gray-600">Description</h1>
        <p className="mt-1 mb-4 text-gray-400">A short summary to get people an idea of what to expect when visiting your website. Try to limit it at 100 characters.</p>
        <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
          "{metaData.description}
        </p>
      </div>
      <div className="mb-10 sm:mb-16">
        <h1 className="text-3xl font-bold text-gray-600">Url</h1>
        <p className="mt-1 mb-4 text-gray-400">The address people will type in to get to your website.</p>
        <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
          "{metaData.url}
        </p>
      </div>
      
      </>
    )
  }

  const submitHandler = (address) => {
    if (address.includes("http://")) {
      getMetaData(address).then(e=> {setMetaData(e)}).catch((e)=>{
        console.log("inside submit handler : ",e);
        setShowError(true);
      });
    } else if(address.includes("https://")) {
      getMetaData(address).then(e=> {setMetaData(e)}).catch((e)=>{
        console.log("inside submit handler : ",e);
        setShowError(true);
      });
    }else getMetaData("https://"+address).then(e=> {setMetaData(e)}).catch((e)=>{
      console.log("inside submit handler : ",e);
      setShowError(true);
    });
    //getMetaData().then(e=> {setMetaData(e)});
    
    
  }

  const getMetaData = async (url) => {
    console.log(router);
    console.log(window.location.hostname);
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
    <Header handler={(e)=>submitHandler(e)} headerBar="true"/>
      <div className="m-5 sm:m-2 grid grid-cols-5 gap-10">
        <div className="col-span-5 sm:col-span-5 lg:col-span-1">Ad here</div>
        <div className="col-span-5 sm:col-span-3 lg:col-span-3">
          
          <div className="my-10 rounded-xl">
          {!showError?<DataComponent/>:<ErrorComponent/>}
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">Ad here</div>
      </div>
    </div> 
    <Footer/>
    </>
  )
};





// This gets called on every request
export async function getServerSideProps(context) {
  
  const input = context.query.url;
  if (input.includes("http://")) {
    return {props:{url:input}}
  } else if(input.includes("https://")) {
    return {props:{url:input}}
  }else return {props:{url:`https://${input}`}}
  

  // if(input.includes("http://")){
  //   try {
  //     const data = await urlMetadata(input);
  //     // Pass data to the page via props
  //     return { props: { data } };
  //   } catch (error) {
  //     // Pass data to the page via props
  //     return { props: { error:"error" } };
  //   }

  // } else if(input.includes("https://")){
  //   try {
  //     const data = await urlMetadata(input).catch((err)=> new Error(err));
  //     console.log(data);
      
  //     // Pass data to the page via props
  //     return { props: { data } };
  //   } catch (error) {
  //     // Pass data to the page via props
  //     return { props: { error:"error" } };
  //   }

  // }else{
  //   const url =`https://${input}`;
  //   try {
  //     const data = await urlMetadata(url);
  //     // Pass data to the page via props
  //     return { props: { data } };
  //   } catch (err) {
  //     // Pass data to the page via props
  //     return {props:{ error:err.code }}
  //   }
    
  // }
}


