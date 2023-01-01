
const Footer = () => {
    return (

        <>
            <footer class="footer section section-sm">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0 mb-4 mb-lg-0">

                            <div class="block about">

                                {/* <img src="images/logo-footer.png" alt="logo">  */}

                                <p class="alt-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div class="col-lg-2 offset-lg-1 col-md-3 col-6 mb-4 mb-lg-0">
                            <div class="block">
                                <h4>Site Pages</h4>
                                <ul>
                                    <li><a href="dashboard-my-ads.html">My Ads</a></li>
                                    <li><a href="dashboard-favourite-ads.html">Favourite Ads</a></li>
                                    <li><a href="dashboard-archived-ads.html">Archived Ads</a></li>
                                    <li><a href="dashboard-pending-ads.html">Pending Ads</a></li>
                                    <li><a href="terms-condition.html">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-3 offset-md-1 offset-lg-0 col-6 mb-4 mb-md-0">
                            <div class="block">
                                <h4>Admin Pages</h4>
                                <ul>
                                    <li><a href="category.html">Category</a></li>
                                    <li><a href="single.html">Single Page</a></li>
                                    <li><a href="store.html">Store Single</a></li>
                                    <li><a href="single-blog.html">Single Post</a>
                                    </li>
                                    <li><a href="blog.html">Blog</a></li>



                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-7">

                            <div class="block-2 app-promotion">
                                <div class="mobile d-flex  align-items-center">
                                    <a href="index.html">

                                        <img src="images/footer/phone-icon.png" alt="mobile-icon" />
                                    </a>
                                    <p class="mb-0">Get the Dealsy Mobile App and Save more</p>
                                </div>
                                <div class="download-btn d-flex my-3">
                                    <a href="index.html"><img src="images/apps/google-play-store.png" class="img-fluid" alt="" /></a>
                                    <a href="index.html" class=" ml-3"><img src="images/apps/apple-app-store.png" class="img-fluid" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <footer class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
                            <div class="copyright">

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <ul class="social-media-icons text-center text-lg-right">
                                <li><a class="fa fa-facebook" href="https://www.facebook.com/themefisher"></a></li>
                                <li><a class="fa fa-twitter" href="https://www.twitter.com/themefisher"></a></li>
                                <li><a class="fa fa-pinterest-p" href="https://www.pinterest.com/themefisher"></a></li>
                                <li><a class="fa fa-github-alt" href="https://www.github.com/themefisher"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="scroll-top-to">
                    <i class="fa fa-angle-up"></i>
                </div>
            </footer>
        </>

    )
}

export default Footer;