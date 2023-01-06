import Script from 'next/script'
import Layout from '../comps/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
  
}
