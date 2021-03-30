import React from 'react'
import useSWR from 'swr';
import MetaDataLayout from './MetaDataLayout';
import {useRouter} from 'next/router'
import {Alert, AlertTitle, AlertIcon, AlertDescription} from '@chakra-ui/react'
export default function MetaData({url}) {
  const { data, isLoading, isError } = useData(url)

  if (isLoading) return <MetaDataLayout isLoading={true} />
  if (isError) return <ErrorComponent />
  return <MetaDataLayout isLoading={false} data={data} />
}


//Error Component Code Start
function ErrorComponent() {
  const router = useRouter();

  setTimeout(()=>{
    //console.log("Redirecting to homepage!!");
    router.replace("/");
  },5000)
  return(
    <>
    {/* <h1 className="p-2 text-xl font-semibold bg-red-400"> </h1> */}
    <Alert
      status="error"
      variant="top-accent"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Error Occured!!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
      Something went wrong!! Check Website Address and Try Again.
      </AlertDescription>
    </Alert>
    </>
  )
}
//Error Component Code End

//const fetcher = url => fetch(url).then(r => r.json());
const fetcher = async url => {
  const res = await fetch(url)

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

function useData(url) {
  //console.log(url);
  const { data, error } = useSWR(`/api/hello?url=https://${url}`, fetcher);
  //console.log("inside useData : data: ",data,"Error: ",error);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
