
const Footer = () => {
    return (

        <>
            <footer class="footer section section-sm">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0 mb-4 mb-lg-0">

                            <div class="block about">

                                {/* <img src="images/logo-footer.png" alt="logo">  */}

                                <p class="alt-color">Welcome to our Ed-Tech company where you can find a wide range of academic resources including assignments, books, and notes. Whether you're a student looking for study materials or a teacher seeking new curriculum resources, we have something for everyone.</p>
                            </div>
                        </div>

                        {/* <div class="col-lg-2 offset-lg-1 col-md-3 col-6 mb-4 mb-lg-0">
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
                        </div> */}

                        <div class="col-lg-2 col-md-3 offset-md-1 offset-lg-0 col-6 mb-4 mb-md-0">
                            <div class="block">
                                <h4>Navigate</h4>
                                <ul>
                                    <li><a href="/adlisting">Add Listing</a></li>
                                    <li><a href="/freelance">Partner</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-7">

                            <div class="block-2 app-promotion">
                                <div  class="download-btn d-flex my-1">
                                    <a href="index.html"><img src="https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/TPC-logo.png?alt=media&token=e05ac327-1b03-456c-96c4-ef2fc5e8912e" class="img-fluid" alt="" /></a>
                                    
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
                                <li><a class="fa fa-facebook" href="#">Facebook</a></li>
                                <li><a class="fa fa-twitter" href="#">Twitter</a></li>
                                <li><a class="fa fa-github-alt" href="#">Instagram</a></li>
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