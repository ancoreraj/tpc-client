import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import $ from "jquery"

const Header = () => {
    const router = useRouter();
    const [token, setToken] = useState(''); 
    const [toggle, setToggle] = useState(true);
    const [toggleClass, setToggleClass] = useState("collapse navbar-collapse");
    const logout = () => {
        localStorage.clear();
        toast('You are now logged out');
        router.push('/')
    }

    useEffect(() => {
        let getToken = JSON.parse(localStorage.getItem('token'))
        setToken(getToken);
    }, [logout]);

    useEffect(()=>{
        if(toggle){
            setToggleClass("collapse navbar-collapse");
        }else{
            setToggleClass("navbar-collapse");
        }
    },[toggle])

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light navigation">
                            <a class="navbar-brand" href="/">
                                <img width={200} src="https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/TPC-logo.png?alt=media&token=e05ac327-1b03-456c-96c4-ef2fc5e8912e" alt="" />
                            </a>
                            <button onClick={handleToggle} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class={toggleClass} id="navbarSupportedContent">
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
                                                <a class="nav-link login-button" onClick={logout}>Logout</a>
                                            </li>)
                                            :
                                            (<li class="nav-item">
                                                <a class="nav-link login-button" href="/auth/login">Login</a>
                                            </li>)
                                    }
                                    <li class="nav-item">
                                        <a class="nav-link text-white add-button" href="/adlisting">Add Listing</a>
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