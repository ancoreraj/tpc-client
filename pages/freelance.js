import { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./../comps/firebase";
import { APP_URL, CATEGORY2, makeid } from '../comps/constants'

const FreeLance = () => {
    const router = useRouter();
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            toast('Please Login');
            router.push('/auth/login');
            return;
        }
        let user = JSON.parse(localStorage.getItem('userData'));

        if(user.isFreelancer){
            toast('You are already added as a Partner');
            router.push('/');
            return;
        }
    }, []);

    const [price, setPrice] = useState(null);
    const [input, setInput] = useState({
        name: '',
        contactNo: '',
        category: '',
        upiId: '',
        accountNo: '',
        confirmAccountNo: '',
        ifscCode: '',
    })
    const [address, setAddress] = useState({
        pincode: '',
        address: '',
    })

    const handleAddressChange = (e) => {
        const { name, value } = e.target
        setAddress((prevState) => ({ ...prevState, [name]: value }));
    }

    useEffect(()=>{
        if(input.category){
            CATEGORY2.map((cat)=>{
                if(cat.id === input.category){
                    setPrice(cat.price);
                }
            })
        }else{
            setPrice(null);
        }
    },[input])

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
        if (!input.name || 
            !input.category || 
            !input.contactNo ||
            !address.address || 
            !address.pincode
        ) {
            toast('Please fill all the Required fields.');
            setBtnDisable(false);
            return;
        }

        if(!input.upiId && !input.accountNo){
            toast('User should must add either UPI Id or Account No');
            setBtnDisable(false);
            return;
        }

        if(input.accountNo && input.accountNo !== input.confirmAccountNo){
            toast('Please Enter correct confirm account no.');
            setBtnDisable(false);
            return;
        }

        if(input.accountNo && !input.ifscCode){
            toast('Please Enter ifsc code');
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
                        aadharCard: downloadURL,
                        pincode: address.pincode,
                        address: address.address,
                        accountNo: input.accountNo,
                        ifscCode: input.ifscCode
                    }   

                    try {
                        const { data } = await axios.post(`${APP_URL}/add-freelance`, body, { headers });
                        console.log(data);
                        const userData = JSON.parse(localStorage.getItem('userData'));
                        userData.isFreelancer = true;
                        localStorage.setItem('userData', JSON.stringify(userData))

                        toast('Congratulations, you are now added as a Partner');
                        router.push('/');

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
                                        <label>Your Name *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            value={input.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Your Contact no *</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="contactNo"
                                            value={input.contactNo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <label>Select Category *</label>
                                    <select
                                        name="category"
                                        value={input.category}
                                        onChange={handleInputChange}
                                        class="w-100 form-control mt-lg-1 mt-md-2 mb-4">
                                        <option value="">Category</option>
                                        {
                                            CATEGORY2.map((cat) => {
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
                                    <div class="form-group">
                                        <label>Account No</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="accountNo"
                                            value={input.accountNo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Account No</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="confirmAccountNo"
                                            value={input.confirmAccountNo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>IFSC Code</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="ifscCode"
                                            value={input.ifscCode}
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
                                    <fieldset class="py-4 seller-information">
                                        <div class="">
                                            <div class="">
                                                <h3>Contact Address</h3>
                                            </div>
                                            <div class="">
                                                <h6 class="font-weight-bold pt-4 pb-1">Pincode *</h6>
                                                <input name='pincode' value={address.pincode} onChange={handleAddressChange} type="text" placeholder="XX-XX-XX" class="form-control bg-white" required />
                                                <h6 class="font-weight-bold pt-4 pb-1">Contact Address *</h6>
                                                <input name='address' value={address.address} onChange={handleAddressChange} type="text" placeholder="Enter your full delivery address" class="form-control bg-white" required />
                                            </div>
                                        </div>
                                    </fieldset>
                                    { price ? <i><div className="mt-2 mb-1">You will recieve <b>₹ {price}</b> after completing each task.</div></i> : ''}
                                    <button
                                        class="btn btn-success"
                                        onClick={handleSubmit}
                                        disabled={btnDisable}
                                    >
                                        {uploadPercent || ''}{" "}Apply as a freelancer
                                    </button>

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