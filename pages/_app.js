import Script from 'next/script'
import Layout from '../comps/Layout'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )

}
