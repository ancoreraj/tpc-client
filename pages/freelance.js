
const FreeLance = () => {
    return (
        <section class="user-profile section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="widget user">
                                <div class="image d-flex justify-content-center">
                                    <img src="images/user/user-thumb.jpg" alt="" class="" />
                                </div>
                                <h5 class="text-center">Samanta Doe</h5>
                            </div>
                            <div class="widget user-dashboard-menu">
                                <ul>
                                    <li><a href="index.html">Savings Dashboard</a></li>
                                    <li><a href="index.html">Saved Offer <span>(5)</span></a></li>
                                    <li><a href="index.html">Favourite Stores <span>(3)</span></a></li>
                                    <li><a href="index.html">Recommended</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="widget welcome-message">
                            <h2>Edit profile</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="widget personal-info">
                                    <h3 class="widget-header user">Edit Personal Information</h3>
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="first-name">First Name</label>
                                            <input type="text" class="form-control" id="first-name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="last-name">Last Name</label>
                                            <input type="text" class="form-control" id="last-name" />
                                        </div>
                                        <div class="form-group choose-file d-inline-flex">
                                            <i class="fa fa-user text-center px-3"></i>
                                            <input type="file" class="form-control-file mt-2 pt-1" id="input-file" />
                                        </div>
                                        <div class="form-group">
                                            <label for="comunity-name">Comunity Name</label>
                                            <input type="text" class="form-control" id="comunity-name" />
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label" for="hide-profile">
                                                <input class="form-check-input mt-1" type="checkbox" value="" id="hide-profile" />
                                                Hide Profile from Public/Comunity
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label for="zip-code">Zip Code</label>
                                            <input type="text" class="form-control" id="zip-code" />
                                        </div>
                                        <button class="btn btn-transparent">Save My Changes</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="widget change-password">
                                    <h3 class="widget-header user">Edit Password</h3>
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="current-password">Current Password</label>
                                            <input type="password" class="form-control" id="current-password" />
                                        </div>
                                        <div class="form-group">
                                            <label for="new-password">New Password</label>
                                            <input type="password" class="form-control" id="new-password" />
                                        </div>
                                        <div class="form-group">
                                            <label for="confirm-password">Confirm New Password</label>
                                            <input type="password" class="form-control" id="confirm-password" />
                                        </div>
                                        <button class="btn btn-transparent">Change Password</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="widget change-email mb-0">
                                    <h3 class="widget-header user">Edit Email Address</h3>
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="current-email">Current Email</label>
                                            <input type="email" class="form-control" id="current-email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="new-email">New email</label>
                                            <input type="email" class="form-control" id="new-email" />
                                        </div>
                                        <button class="btn btn-transparent">Change email</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeLance