import Head from 'next/head'
import Script from 'next/script'
import Layout from '../comps/Layout'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Project Complete | Complete your assignments and projects</title>
      </Head>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{ backgroundColor: "#28a745", color: "white" }}
      />
    </>
  )

}
