import React, {useState, useContext} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { Box, Flex, Heading, Text, InputGroup, InputLeftAddon, Input, Button, FormControl } from '@chakra-ui/react';
import WarningContext from './Warning/WarningContext';

export default function Header() {

  //Warning Context
  const {showWarning} = useContext(WarningContext);

  //Next Router
  const router = useRouter();

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

  //Submit on Button Click Handler
  //Submit button is hidden
  const submitHandler = (e) => console.log(e);

  //Header Code End
  return (
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
  )
}
