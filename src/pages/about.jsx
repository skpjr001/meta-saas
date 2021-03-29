import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'

export default function about() {
  // const [datas, setData] = useState({});
  // const getData = async () => {
  //   const url = "https://google.co.in";
  //   const res = await (await fetch(`http://localhost:3000/api/hello?url=${url}`)).json();
  //   return res.Data;
  // }
  // useEffect(() => {
  //   getData().then(e=> {console.log(e); setData(e)});
  // }, [])
  

  


  
  return (
    <Layout>
      <div>About</div>
      {/* <h1>{!datas.title? "Loading":datas.title}</h1> */}
    </Layout>
  )
}
