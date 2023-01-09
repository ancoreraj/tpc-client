import { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./../comps/firebase";
import { APP_URL, CATEGORY, makeid, RAZORPAY_KEY } from '../comps/constants'
import { isEmail } from "../comps/constants";

const FreeLance = () => {
    const router = useRouter();
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            toast('Please Login before you submit your listing.');
            router.push('/auth/login');
            return;
        }
    }, []);

    const [input, setInput] = useState({
        name: '',
        contactNo: '',
        category: '',
        upiId: '',
    })
    const [aadharCard, setAadharCard] = useState(null);
    const [uploadPercent, setUploadPercent] = useState(0);
    const [btnDisable, setBtnDisable] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        if (file.size >= 5 * 1000000) {
            toast("Please upload file of size less than 5 MB");
        } else {
            setAadharCard(acceptedFiles[0])
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async () => {
        setBtnDisable(true);
        if (!input.name || !input.category || !input.contactNo || !input.upiId) {
            toast('Please fill all the fields.');
            setBtnDisable(false);
            return;
        }
        let userData = JSON.parse(localStorage.getItem('userData'))
        const sotrageRef = ref(storage, `aadharCard/${userData.email}/${aadharCard.name}-${makeid()}`);
        const uploadTask = uploadBytesResumable(sotrageRef, aadharCard);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setUploadPercent(prog);
            },
            (error) => {
                toast('Something Error Happened, please try again')
                setBtnDisable(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    const headers = {
                        'Content-Type': 'application/json',
                        'authorization': `Token ${JSON.parse(localStorage.getItem('token'))}`
                    }
                    const body = {
                        contactNo: input.contactNo,
                        category: input.category,
                        name: input.name,
                        upiId: input.upiId,
                        aadharCard: downloadURL
                    }

                    try {
                        const { data } = await axios.post(`${APP_URL}/add-freelance`, body, { headers });
                        router.push('/');
                        toast('Congratulatins, you are now added as a freelance');

                    } catch (err) {
                        setBtnDisable(false);
                        toast('Something error happened, please try again.');
                    }
                });
            }
        );
    }

    return (
        <section class="user-profile section">
            <div class="container">
                <div class="row">
                    {/* <div class="col-lg-4">
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
                    </div> */}
                    <div class="col-lg-8">
                        <div class="widget welcome-message">
                            <h2>Join us as a <b>Partner</b></h2>
                            <p>Are you a talented Partner looking for new opportunities? Join our team and work on exciting projects with a dynamic and supportive group of professionals. We offer competitive rates and the opportunity to collaborate with a diverse group of clients. Apply now to become a part of our growing team of freelancers.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="widget personal-info">
                                    <h3 class="widget-header user">Add Personal Information</h3>
                                    <div class="form-group">
                                        <label>Your Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            value={input.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Your Contact no</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="contactNo"
                                            value={input.contactNo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <label>Select Category</label>
                                    <select
                                        name="category"
                                        value={input.category}
                                        onChange={handleInputChange}
                                        class="w-100 form-control mt-lg-1 mt-md-2 mb-4">
                                        <option>Category</option>
                                        {
                                            CATEGORY.map((cat) => {
                                                return (
                                                    <option value={cat.id}>{cat.val}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <div class="form-group">
                                        <label>Your UPI Id</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="upiId"
                                            value={input.upiId}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <label for="file-upload">
                                    
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {aadharCard ?
                                                    <span style={{ height: '128px' }} class="d-block font-weight-bold text-dark">{aadharCard?.name}</span>
                                                    :
                                                    <>
                                                        <span class="d-block font-weight-bold text-dark">Drop files anywhere to upload</span>
                                                        <span class="d-block">or</span>
                                                        <span class="d-block btn bg-primary text-white my-3 select-files">Select Your aadhar card</span>
                                                        <span class="d-block">Maximum upload file size: 5 MB </span>
                                                    </>
                                                }

                                            </div>
                                        
                                    </label>
                                    <button
                                        class="btn btn-success"
                                        onClick={handleSubmit}
                                        disabled={btnDisable}
                                    >
                                        {uploadPercent || ''}{" "}Apply as a freelancer
                                    </button>

                                </div>
                            </div>
                            {/* <div class="col-lg-6 col-md-6">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeLance