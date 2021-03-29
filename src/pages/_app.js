import '../styles/globals.css';
import {ChakraProvider} from '@chakra-ui/react'
import WarningProvider from '../Components/Warning/WarningProvider';
import Footer from '../Components/Footer';
function MyApp({ Component, pageProps }) {
  return (  

    <ChakraProvider>
      <WarningProvider>
        <Component {...pageProps} />
      </WarningProvider>
      <Footer/>
    </ChakraProvider>
    
  )
}


export default MyApp
