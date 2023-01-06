import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeroArea from '../comps/HeroArea'
import Products from '../comps/Products'
import Category from '../comps/Category'
import { APP_URL } from '../comps/constants'

export default function Home() {

  useEffect(()=> {
    let userData = JSON.parse(localStorage.getItem('userData'))
    let token = localStorage.getItem('token')

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
                <h2>Trending Adds</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magnam.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="trending-ads-slide">
                <div class="col-sm-12 col-lg-4">
                  <Products />
                </div>
                <div class="col-sm-12 col-lg-4">
                  <Products />
                </div>
                <div class="col-sm-12 col-lg-4">
                  <Products />
                </div>
                <div class="col-sm-12 col-lg-4">
                  <Products />
                </div>
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
                <h2>Start today to get your notes and Assignment done</h2>
                <ul class="list-inline mt-30">
                  <li class="list-inline-item"><a class="btn btn-secondary" href="category.html">Browser Listing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
