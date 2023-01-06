import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeroArea from '../comps/HeroArea'
import Products from '../comps/Products'
import Category from '../comps/Category'
import { APP_URL, CATEGORY } from '../comps/constants'

const products = CATEGORY.map((cat) => ({
  ...cat, 
  img : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 

}))

export default function Home() {

  useEffect(()=> {
    let userData = JSON.parse(localStorage.getItem('userData'))
    let token = JSON.parse(localStorage.getItem('token'))

    console.log(token, userData)
  },[])
  
  return (
    <>
      <HeroArea />
      <section class="popular-deals section bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2>The Project Complete</h2>
                <p>We will deliver awesome handwritten notes/assignments at your door steps.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="trending-ads-slide d-flex flex-wrap">
                {
                  products.map((product) => {
                    return (
                      <div class="col-sm-12 col-lg-4" >
                        <Products product={product} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Category />
      <section class="call-to-action overly bg-3 section-sm">
        <div class="container">
          <div class="row justify-content-md-center text-center">
            <div class="col-md-8">
              <div class="content-holder">
                <h2>List today and get your notes and Assignment done in the best way possible.</h2>
                <ul class="list-inline mt-30">
                  <li class="list-inline-item"><a class="btn btn-success add-button" href="/adlisting">Add Listing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
