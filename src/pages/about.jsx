import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Layout from '../Components/Layout'

export default function about() {

  
  return (
    <Layout>
      <Header />
      <div id="Content" className="m-5 sm:m-2 grid grid-cols-5 gap-10">
        <div className="col-span-5 sm:col-span-5 lg:col-span-1">Ad here</div>
        <div className="col-span-5 sm:col-span-3 lg:col-span-3">
          <div className="my-10">
          <Box w={"100%"}>
            <Heading size={"lg"} textColor={"gray.700"}>About</Heading>
            <Text my={3} fontSize={"lg"} textColor={"gray.600"}>
              {`While developing personal websites, I was always on the lookout for best practices and examples of meta tags that would make most sense and impact. While there were some tools that could generate those, I haven't found a tool that could show me how my websites will look like after my visitors would share them.`}
            </Text>
            <Text my={4} fontSize={"lg"} textColor={"gray.600"}>
              {`That's why I've made Meta Tags. It's pretty simple and basic for now, but it's by far not finished. I've got bigger plans for it, that I think you'll love, like browser extensions, cms plugins and a way to handle all the metadata of your websites from one place.`}
            </Text>
            <Flex direction={'row'}>
              <Text fontSize={"lg"} textColor={"gray.600"}>If you find Meta Tags helpful, consider getting me a </Text>
              <a href="https://www.buymeacoffee.com/skpjr001" ><Text fontSize={"lg"} fontWeight={"semibold"} textColor={"purple.600"} mx={1}>coffee </Text></a>
              <Text fontSize={"lg"} textColor={"gray.600"}> or a </Text>
              <a href="/" ><Text fontSize={"lg"} fontWeight={"semibold"} textColor={"purple.600"} mx={1}>crypto beer</Text></a>
              <Text fontSize={"lg"} textColor={"gray.600"}> if you can 😉</Text>
            </Flex>
            <Text my={4} fontSize={"lg"} textColor={"gray.600"}>
              {`Cheers, Sachin aka skpjr001✌️`}
            </Text>
          </Box>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">Ad here</div>
      </div>
    </Layout>
  )
}

// This gets called on every request
export async function getStaticProps(context) {
  
  return { props:{}}
}
