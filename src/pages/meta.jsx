import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link'
import {useRouter} from'next/router'
import { Box, Flex, Heading, Text, InputGroup, InputLeftAddon, Input, Button, FormControl } from '@chakra-ui/react';
import MetaData from '../Components/MetaData';
import WarningContext from '../Components/Warning/WarningContext';
import Warning from '../Components/Warning/Index';




export default function meta() {

  //Warning Context
  const {showWarning} = useContext(WarningContext);

  //next router to get query obj
  const router = useRouter();
  const { url } = router.query;


  //Header Code Start
  const [address, setAddress] = useState("");

  const handleAddress = (e) => setAddress(e.target.value);

  const submitOnEnter = (e) => {
    if(e.keyCode == 13){
      if(address==""){
        showWarning("Blank Input!!","Enter a valid input url address.");
        return;
      }else if(address.includes("http://")){
        showWarning("Http Included", "Do not enter http:// in your input url address.");
        return;
      }else if(address.includes("https://")){
        showWarning("Https Included", "Do not enter http:// in your input url address.");
        return;
      }
      router.push(`/meta?url=${address}`);
    }
  }

  //Header Code End

  
  
  

  // const submitHandler = (address) => {
  //   if (address.includes("http://")) {
  //     getMetaData(address).then(e=> {
  //       setShowError(false);
  //       setMetaData(e);
  //     }).catch((e)=>{
  //       console.log("inside submit handler : ",e);
  //       setShowError(true);
  //     });
  //   } else if(address.includes("https://")) {
  //     getMetaData(address).then(e=> {
  //       setShowError(false);
  //       setMetaData(e);
  //     }).catch((e)=>{
  //       console.log("inside submit handler : ",e);
  //       setShowError(true);
  //     });
  //   }else getMetaData("https://"+address).then(e=> {
  //     setShowError(false);
  //     setMetaData(e);
  //   }).catch((e)=>{
  //     console.log("inside submit handler : ",e);
  //     setShowError(true);
  //   });
  //   getMetaData().then(e=> {setMetaData(e)});
  // }

  // const getMetaData = async (url) => {
  //   console.log("inside method:",url);
  //   const res = await fetch(`/api/hello?url=${url}`);
  //   if(res.ok == false) throw new Error("Something went wrong!! Please try again.") 
  //   const data = await res.json();
  //   console.log(data);
  //   return data.Data;
  // }

  //Submit on Button Click Handler
  //Submit button is hidden
  const submitHandler = (e) => console.log(e);

  return (
    <>
    <Warning />
    <Box className="lg:container mx-auto">
      <Flex id={"Header"} m={8} direction={["column","row"]} align={"center"}  className="  items-center  justify-evenly">
        <Link href="/"><a><Heading fontWeight={"bold"} size={"2xl"} p={5} textColor={"purple.600"} >Meta Tags</Heading></a></Link>
        <Box className="inline-flex">
          <FormControl id="input">
            <InputGroup size={"lg"}  value={address}  onChange={handleAddress} onKeyDown={submitOnEnter}>
              <InputLeftAddon children="https://" borderRadius="3xl" />
              <Input isRequired width={{base:44, md:56, xl:64}} fontSize={{base:"md", md:"lg", lg:"xl"}} borderRadius="3xl" _hover={{borderColor:"purple.400"}} focusBorderColor="purple.600"  isRequired type="text" placeholder="Website Address" />
            </InputGroup>
            <Button hidden type="submit" colorScheme="purple" variant="solid" onClick={submitHandler}>Submit</Button>
          </FormControl>
        </Box>
      </Flex>
      <div id="Content" className="m-5 sm:m-2 grid grid-cols-5 gap-10">
        <div className="col-span-5 sm:col-span-5 lg:col-span-1">Ad here</div>
        <div className="col-span-5 sm:col-span-3 lg:col-span-3">
          
          <div className="my-10 rounded-xl">
          <MetaData url={url} />
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">Ad here</div>
      </div>
    </Box> 
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


