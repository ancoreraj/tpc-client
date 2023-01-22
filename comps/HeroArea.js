import { CATEGORY } from "./constants"

const HeroArea = () => {
    return (
        <section class="hero-area bg-1 text-center overly">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <div class="content-block">
                            <h1 className="home-text">Complete your Assignment & Projects</h1>
                            <div className="social-icon-container">
                            <div class="social-icons text-center text-lg-right mt-4">
                            <div><a class="youtube-icon" href="https://www.youtube.com/channel/UCdJmXDL8uXV8a-Rc7a3Z-nQ"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg></a></div>
                                <div><a class="insta-icon" href="https://www.instagram.com/_tpc_edu/">
                                    <svg width="32" height="32" viewBox="0 0 200 200">
                                        <defs>

                                            <linearGradient id="gradient1" x1=".8" y1=".8" x2="0">
                                                <stop offset="0" stop-color="#c92bb7" />
                                                <stop offset="1" stop-color="#3051f1" />
                                            </linearGradient>
                                            <radialGradient id="gradient2" cx=".2" cy="1" r="1.2">
                                                <stop offset="0" stop-color="#fcdf8f" />
                                                <stop offset=".1" stop-color="#fbd377" />
                                                <stop offset=".25" stop-color="#fa8e37" />
                                                <stop offset=".35" stop-color="#f73344" />
                                                <stop offset=".65" stop-color="#f73344" stop-opacity="0" />
                                            </radialGradient>
                                            <rect id="logoContainer" x="0" y="0" width="200" height="200" rx="50" ry="50" />
                                        </defs>

                                        <use href="#logoContainer" fill="url(#gradient1)" />
                                        <use href="#logoContainer" fill="url(#gradient2)" />

                                        <rect x="35" y="35" width="130" height="130" rx="30" ry="30"
                                            fill="none" stroke="#fff" stroke-width="13" />

                                        <circle cx="100" cy="100" r="32"
                                            fill="none" stroke="#fff" stroke-width="13" />

                                        <circle cx="140" cy="62" r="9" fill="#fff" />
                                    </svg>
                                </a></div>
                               
                                <div><a class="twitter-icon" href="https://twitter.com/_tpc_edu"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg></a></div>


                            </div>
                            </div>
                            
                            <p className="mt-3 home-text-p">Join the millions who complete their projects  everyday in local communities.</p>
                            <div class="short-popular-category-list text-center">
                            </div>
                        </div>
                        {/* <div class="advance-search">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-md-12 align-content-center">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-xl-4 col-lg-3 col-md-6">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputtext4"
                                                        placeholder="What are you looking for" />
                                                </div>
                                                <div class="form-group col-lg-3 col-md-6">
                                                    <select class="w-100 form-control mt-lg-1 mt-md-2">
                                                        <option>Category</option>
                                                        {
                                                            CATEGORY.map((cat)=> {
                                                                return (
                                                                    <option value={cat.id}>{cat.val}</option>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </select>
                                                </div>
                                                <div class="form-group col-lg-3 col-md-6">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputLocation4" placeholder="Location" />
                                                </div>
                                                <div class="form-group col-xl-2 col-lg-3 col-md-6 align-self-center">
                                                    <button type="submit" class="btn btn-primary active w-100">Search Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>

        </section>
    )

}

export default HeroArea