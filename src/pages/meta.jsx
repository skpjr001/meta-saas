import React, {useState, useEffect, useContext} from 'react';

import {useRouter} from'next/router'
import { Box, Flex, Heading, Text, InputGroup, InputLeftAddon, Input, Button, FormControl } from '@chakra-ui/react';
import MetaData from '../Components/MetaData';
import WarningContext from '../Components/Warning/WarningContext';
import Warning from '../Components/Warning/Index';
import Header from '../Components/Header';




export default function meta() {

  //next router to get query obj
  const router = useRouter();
  const { url } = router.query;

  

  return (
    <>
    <Warning />
    <Box className="lg:container mx-auto">
      <Header/>
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
  
  return { props:{}}
}


