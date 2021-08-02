import React, { useState, useContext } from 'react'
import Layout from '../Components/Layout'
import Link from 'next/link'
import {useRouter} from 'next/router';
import {FormControl, InputGroup, Input, InputLeftAddon, Button, Center, Text, Box, Heading, Wrap, Divider} from '@chakra-ui/react'
import WarningContext from '../Components/Warning/WarningContext';
import Warning from '../Components/Warning/Index';



export default function Home() {

  //next router
  const router = useRouter();

  //Warning Context
  const {showWarning} = useContext(WarningContext);

  //Input Address State
  const [address, setAddress] = useState("");

  //Example Address
  const example = "Google.com";

  
  

  //Sumit on Enter Key Handler
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
      router.push({pathname:"/meta", query:{url:`${address}`}});
      return;
    }
  }

  //Input Address Change Handler
  const handleAddress = (e) => setAddress(e.target.value);

  //Submit Example address handler
  // const submitExample = (e) => {
  //   router.push({pathname:"/meta", query:{url:example}});
  // }

  //Submit on Button Click Handler
  //Submit button is hidden
  const submitHandler = (e) => console.log(e);



  return (
    <>
    <Warning />
    <Box id="Header" className="m-2 pt-3 sm:pt-7 sm:pr-7 flex flex-row justify-end">
      <Link href="/"><a><Heading pl={3} textColor={"gray.700"} fontWeight={"semibold"} size={"sm"} _hover={{textColor:"gray.400"}}>Why Meta Tags?</Heading></a></Link>
      <Link href="/about"><a><Heading pl={3} hidden className="pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">About</Heading></a></Link>
    </Box>
    <Layout title="Meta Generator - Website Meta Tag Checker and Generator">
      <section>
        <div className = "m-5 sm:m-8 flex flex-col items-center text-center">
          <Center flexDirection={"column"}>
            <Link href='/'>
              <a><Heading as={"h1"} fontSize={{base:"5xl", md:"6xl", lg:"7xl", xl:"8xl"}} fontWeight={"bold"} textColor={"purple.600"}>Meta Tags</Heading></a>
            </Link>
            <Text m={2} fontSize={{base:"sm", md:"md", lg:"lg", xl:"xl"}} fontWeight={"medium"} textColor={"gray.400"} >Simply search and generate meta tags/data.</Text>
          </Center>
          <Center height={{base:"30px", md:"40px", lg:"60px"}}>
            <Divider orientation="vertical" />
          </Center>
          <Center flexDirection={"column"} >
            <FormControl id="input">
              <InputGroup size={"lg"}  value={address}  onChange={handleAddress} onKeyDown={submitOnEnter}>
                <InputLeftAddon children="https://" borderRadius="3xl" />
                <Input isRequired width={{base:52, md:64, md:96}} fontSize={{base:"lg", md:"xl", lg:"2xl"}} borderRadius="3xl" _hover={{borderColor:"purple.400"}} focusBorderColor="purple.600"  isRequired type="text" placeholder="Website Address" />
              </InputGroup>
              <Button hidden type="submit" colorScheme="purple" variant="solid" onClick={submitHandler}>Submit</Button>
            </FormControl>
          
          <Box id="example">
            <Wrap>
            <Text textColor={"gray.400"}>{"Try on an example :  "}</Text><Link href={`/meta?url=${example}`} ><a><Text textColor={"purple.400"} cursor={"pointer"} _hover={{textColor:"purple.600"}} >{example}</Text></a></Link>
            </Wrap>
          </Box>
          </Center>
        </div>
      </section>
    </Layout>
    </>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
