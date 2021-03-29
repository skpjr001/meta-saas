import React,{useContext} from 'react'
import WarningContext from './WarningContext';
import {Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton} from'@chakra-ui/react';

export default function Index() {
  const {warning, hideWarning} = useContext(WarningContext);

  if(warning.status){
    setTimeout(()=>{
      hideWarning();
    },8000);
  }

  return(
    <>
    {warning.status && (
    <Alert id="warning" status={"warning"} variant={"top-accent"}>
      <AlertIcon/>
      <AlertTitle mr={2}>{warning.name}</AlertTitle>
      <AlertDescription>{warning.message}</AlertDescription>
      <CloseButton onClick={hideWarning} position={"absolute"} right={2} top={2}/>
    </Alert>)}
    </>
  )
}