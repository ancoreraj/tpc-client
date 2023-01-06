import React from 'react'

const Header = () => {
    return (
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light navigation">
                            <a class="navbar-brand" href="/">
                                 <img src="images/logo.png" alt="" /> 
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto main-nav ">
                                    <li class="nav-item @@home">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    {/* <li class="nav-item dropdown dropdown-slide @@dashboard">
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#!">Dashboard<span><i class="fa fa-angle-down"></i></span>
                                        </a>

                                        
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item @@dashboardPage" href="#">Dashboard</a></li>
                                            <li><a class="dropdown-item @@dashboardMyAds" href="#">Dashboard My Ads</a></li>
                                            <li><a class="dropdown-item @@dashboardFavouriteAds" href="#">Dashboard Favourite Ads</a></li>
                                            <li><a class="dropdown-item @@dashboardArchivedAds" href="#">Dashboard Archived Ads</a></li>
                                            <li><a class="dropdown-item @@dashboardPendingAds" href="#">Dashboard Pending Ads</a></li>

                                            <li class="dropdown dropdown-submenu dropright">
                                                <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                                <ul class="dropdown-menu" aria-labelledby="dropdown0501">
                                                    <li><a class="dropdown-item" href="/">Submenu 01</a></li>
                                                    <li><a class="dropdown-item" href="/">Submenu 02</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li class="nav-item @@home">
                                        <a class="nav-link" href="/freelance">Freelance</a>
                                    </li>
                                    <li class="nav-item @@home">
                                        <a class="nav-link" href="/about">About Us</a>
                                    </li>
                                    <li class="nav-item @@home">
                                        <a class="nav-link" href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ml-auto mt-10">
                                    <li class="nav-item">
                                        <a class="nav-link login-button" href="/auth/login">Login</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white add-button" href="/adlisting"><i class="fa fa-plus-circle"></i> Add Listing</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;