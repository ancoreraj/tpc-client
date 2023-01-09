import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const Header = () => {
    const router = useRouter();
    const [token, setToken] = useState('');

    const logout = () => {
        localStorage.clear();
        toast('You are now logged out');
        router.push('/')
    }

    useEffect(() => {
        let getToken = JSON.parse(localStorage.getItem('token'))
        setToken(getToken);
    },[logout]);

    
    return (
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light navigation">
                            <a class="navbar-brand" href="/">
                                <img width={120} src="https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/TPC.jpg?alt=media&token=2b184488-aa64-474f-bca0-1f655314b8d6" alt="" />
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
                                        <a class="nav-link" href="/freelance">Partner</a>
                                    </li>
                                    <li class="nav-item @@home">
                                        <a class="nav-link" href="/about">About Us</a>
                                    </li>
                                    <li class="nav-item @@home">
                                        <a class="nav-link" href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ml-auto mt-10">
                                    {
                                        token ?
                                            (<li class="nav-item">
                                                <button class="nav-link login-button" onClick={logout}>Logout</button>
                                            </li>)
                                            :
                                            (<li class="nav-item">
                                                <a class="nav-link login-button" href="/auth/login">Login</a>
                                            </li>)
                                    }
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