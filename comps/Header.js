import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

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
                                    {
                                        token ?
                                            (<li class="nav-item">
                                                <a class="pointer nav-link login-button" onClick={logout}>Logout</a>
                                            </li>
                                            )
                                            :
                                            (<li class="nav-item">
                                                <a class="pointer nav-link login-button" href="/auth/login">Login</a>
                                            </li>)
                                    }
                                    <li class="nav-item">
                                        <a class="nav-link text-white add-button" href="/adlisting">Add Listing</a>
                                    </li>
                                    {
                                        token && 
                                        <li class="nav-item">
                                            <a class="ml-3 nav-link" href="/auth/profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                                            </a>
                                        </li>
                                    }
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