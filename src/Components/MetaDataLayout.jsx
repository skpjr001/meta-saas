import { Box, Heading, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'

export default function MetaDataLayout({isLoading=true, data}) {
  //console.log(isLoading," ",data);
  return(
    <>
    <Box my={{base:10,lg:16}} >
      <Heading textColor={"gray.600"} fontWeight={"bold"} size={"xl"} >Title</Heading>
      <Text textColor={"gray.400"} my={2} >Your website’s “name”. While it should be a bit descriptive, try to limit it at 50 characters.</Text>
      <Skeleton isLoaded={!isLoading} borderRadius={"xl"}>
      <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
        "{data?data.title:""}
      </p>
      </Skeleton>
    </Box>
    <Box my={{base:10,lg:16}} >
      <Heading textColor={"gray.600"} fontWeight={"bold"} size={"xl"} >Description</Heading>
      <Text textColor={"gray.400"} my={2} >A short summary to get people an idea of what to expect when visiting your website. Try to limit it at 100 characters.</Text>
      <Skeleton isLoaded={!isLoading} borderRadius={"xl"} isLoaded>
      <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
        "{data?data.description:""}
      </p>
      </Skeleton>
    </Box>
    <Box my={{base:10,lg:16}} >
      <Heading textColor={"gray.600"} fontWeight={"bold"} size={"xl"} >Image Source</Heading>
      <Text textColor={"gray.400"} my={2} >This image is the first thing people will see when someone shares your website. Make sure it stands out. Sometimes social websites fallback to a random image from your website, so this is quite important.</Text>
      <Skeleton isLoaded={!isLoading} borderRadius={"xl"}>
      <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
        "{data?.image}
      </p>
      </Skeleton>
    </Box>
    <Box my={{base:10,lg:16}} >
      <Heading textColor={"gray.600"} fontWeight={"bold"} size={"xl"} >Url</Heading>
      <Text textColor={"gray.400"} my={2} >The address people will type in to get to your website.</Text>
      <Skeleton isLoaded={!isLoading} borderRadius={"xl"}>
      <p contentEditable suppressContentEditableWarning={true} className="my-1 p-3 text-base font-medium outline-none border-2 border-transparent rounded-xl hover:border-indigo-400 focus:border-indigo-600 bg-gray-100">
        "{data?.url}
      </p>
      </Skeleton>
    </Box>
    </>
  )
}
