import '../styles/globals.css';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
function MyApp({ Component, pageProps }) {
  return (
    <div className="">  
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
