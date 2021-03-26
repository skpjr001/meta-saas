import '../styles/globals.css';
import Footer from '../Components/Footer'
function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  )
}

export default MyApp
