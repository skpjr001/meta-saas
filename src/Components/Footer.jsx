import React from 'react'
import Link from 'next/link'
import {Box, Flex, Spacer, Text} from'@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg={"gray.100"} w="100%" p={4}>
      <Flex>
        <Link href="/about"><a><Text fontSize={{base:"xs", md:"sm", lg:"md", xl:"lg"}} mr={"4"} fontWeight={"medium"} textColor={"gray.700"} _hover={{textColor:"gray.400"}}>About Us</Text></a></Link>
        {/* <Link href="/contact"><a><Text fontSize={{base:"xs", md:"sm", lg:"md", xl:"lg"}} mr={"4"} fontWeight={"medium"} textColor={"gray.700"} _hover={{textColor:"gray.400"}}>Contact Us</Text></a></Link> */}
        <Link href="/privacy-policy"><a><Text fontSize={{base:"xs", md:"sm", lg:"md", xl:"lg"}} mr={"4"} fontWeight={"medium"} textColor={"gray.700"} _hover={{textColor:"gray.400"}}>Privacy Policy</Text></a></Link>
        <Spacer/>
        <Link href="/"><a><Text fontSize={{base:"xs", md:"sm", lg:"md", xl:"lg"}} fontWeight={"medium"} textColor={"gray.700"} _hover={{textColor:"gray.400"}}>Desinged By: Pal Labs</Text></a></Link>
      </Flex>
    </Box>
  )
}
