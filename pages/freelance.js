import { useState, useEffect, useCallback } from "react"
import axios from "axios";
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./../comps/firebase";
import { APP_URL, CATEGORY2, makeid, FREELANCE_CATEGORY } from '../comps/constants';

const F_C_I = FREELANCE_CATEGORY.map((cat) => {
    return {
        id: cat.id,
        val: cat.val,
        checked: false,
        price: cat.price,
    }
});

const FreeLance = () => {
    const router = useRouter();
    const [price, setPrice] = useState(null);
    const [input, setInput] = useState({
        name: '',
        contactNo: '',
        upiId: '',
        accountName: '',
        accountNo: '',
        confirmAccountNo: '',
        ifscCode: '',
    })
    const [address, setAddress] = useState({
        pincode: '',
        address: '',
    })
    const [userData, setUserData] = useState({});
    const [freelanceCategory, setFreelanceCategory] = useState(F_C_I);
    const [isEdit, setIsEdit] = useState(false);
    const [editData, setEditData] = useState({
        name: "",
        pincode: "",
        address: "",
        accountNo: "",
        ifscCode: "",
        upiId: "",
        contactNo: "",
    })
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            toast('Please Login');
            router.push('/auth/login');
            setIsLoading(false);
            return;
        }
        let user = JSON.parse(localStorage.getItem('userData'));

        if (user.isFreelancer) {
            const headers = {
                'Content-Type': 'application/json',
                'authorization': `Token ${JSON.parse(localStorage.getItem('token'))}`
            }
            async function getUserData() {
                const { data } = await axios.get(`${APP_URL}/auth/me`, { headers });
                setUserData(data);
                setIsLoading(false);
            }
            getUserData();

        }else{
            setIsLoading(false);
        }
    }, []);

    const handleCategoryChange = (e, id) => {
        const tempArr = [...freelanceCategory];
        tempArr[id].checked = e.target.checked;
        setFreelanceCategory(tempArr);
    }

    const handleAddressChange = (e) => {
        const { name, value } = e.target
        setAddress((prevState) => ({ ...prevState, [name]: value }));
    }

    // useEffect(()=>{
    //     if(input.category){
    //         CATEGORY2.map((cat)=>{
    //             if(cat.id === input.category){
    //                 setPrice(cat.price);
    //             }
    //         })
    //     }else{
    //         setPrice(null);
    //     }
    // },[input])

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
            !input.contactNo ||
            !address.address ||
            !address.pincode
        ) {
            toast('Please fill all the Required fields.');
            setBtnDisable(false);
            return;
        }

        if (!input.upiId && !input.accountNo) {
            toast('User should must add either UPI Id or Account No');
            setBtnDisable(false);
            return;
        }

        if (input.accountNo && input.accountNo !== input.confirmAccountNo) {
            toast('Please Enter correct confirm account no.');
            setBtnDisable(false);
            return;
        }

        if (input.accountNo && !input.ifscCode) {
            toast('Please Enter ifsc code');
            setBtnDisable(false);
            return;
        }

        if (!aadharCard) {
            toast('Please Upload your Aadhar Card');
            setBtnDisable(false);
            return;
        }

        let checkCategory = false;
        freelanceCategory.map((cat) => {
            if (cat.checked) {
                checkCategory = true;
            }
        })

        let checkedCategoryArr = []
        if (!checkCategory) {
            toast('Please Check atlease one category');
            setBtnDisable(false);
            return;
        } else {
            freelanceCategory.map((cat) => {
                if (cat.checked) {
                    checkedCategoryArr.push(cat.id);
                }
            })
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
                        category: checkedCategoryArr,
                        name: input.name,
                        upiId: input.upiId,
                        aadharCard: downloadURL,
                        pincode: address.pincode,
                        address: address.address,
                        accountName: input.accountName,
                        accountNo: input.accountNo,
                        ifscCode: input.ifscCode
                    }

                    try {
                        const { data } = await axios.post(`${APP_URL}/add-freelance`, body, { headers });
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

    const handleEdit = () => {
        setEditData(userData)
        setIsEdit(true)
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target
        setEditData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleEditCancel = () => {
        setIsEdit(false);
        setEditData({});
    }

    const handleUpdate = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `Token ${JSON.parse(localStorage.getItem('token'))}`
        }
        await axios.post(`${APP_URL}/update-freelance`, editData, {headers} );
        toast('Details Updated');
        window.location.reload();
    }

    return (
        <section class="user-profile section">
            {!userData.isFreelancer && !isLoading ?
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
                                        {/* <select
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
                                    </select> */}
                                        <div class="freelance-checkbox">
                                            {
                                                freelanceCategory.map((cat, index) => {
                                                    return (
                                                        <div className="d-flex p-1">
                                                            <input
                                                                id={index + 1}
                                                                type="checkbox"
                                                                checked={freelanceCategory[index].checked}
                                                                onChange={(e) => handleCategoryChange(e, index)}
                                                            />
                                                            <label for={index + 1}><b>{cat.val}</b></label>
                                                            <p className="ml-3 mb-0">₹ {cat.price}</p>
                                                        </div>
                                                    )

                                                })
                                            }

                                        </div>

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
                                            <label>Account Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="accountName"
                                                value={input.accountName}
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
                                        {price ? <i><div className="mt-2 mb-1">You will recieve <b>₹ {price}</b> after completing each task.</div></i> : ''}
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
                </div> :
                !isLoading ? <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="widget welcome-message">
                                <div className="freelance-edit">
                                    <h2><b>Freelance Profile</b></h2>
                                    <div>
                                        <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </div>
                                </div>
                                <ul class="freelance-edit-cont category-list ml-3 mt-3">
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your Name *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="name"
                                                    value={editData.name}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Name: </b>{userData.name}</li>

                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Pin Code *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="pincode"
                                                    value={editData.pincode}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>PinCode: </b>{userData.pincode}</li>


                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your Address *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="address"
                                                    value={editData.address}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Address: </b>{userData.address}</li>
                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your Account Name. *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="accountName"
                                                    value={editData.accountName}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Account Name: </b>{userData.accountName}</li>
                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your Account No. *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="accountNo"
                                                    value={editData.accountNo}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Account No: </b>{userData.accountNo}</li>


                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your Ifsc Code *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="ifscCode"
                                                    value={editData.ifscCode}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Ifsc Code: </b>{userData.ifscCode}</li>

                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your Upi Id *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="upiId"
                                                    value={editData.upiId}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Upi Id: </b>{userData.upiId}</li>

                                    }
                                    {
                                        isEdit ?
                                            <div class="form-group">
                                                <label>Your ContactNo *</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="contactNo"
                                                    value={editData.contactNo}
                                                    onChange={handleEditChange}
                                                />
                                            </div> :
                                            <li className="mb-2"><b>Contact No: </b>{userData.contactNo}</li>


                                    }
                                    {
                                        isEdit ? 
                                        <div className="d-flex">
                                            <li><button className="btn btn-success btn-sm mt-2" onClick={handleUpdate}>Update</button></li>
                                            <li><button className="btn btn-danger btn-sm mt-2 ml-3" onClick={handleEditCancel}>Cancel</button></li>

                                        </div>
                                         : ""
                                    }
                                    

                                </ul>
                            </div>

                        </div>
                    </div>
                </div> : ""
            }
            {
                isLoading ? <div className="p-5">Loading...</div> : ""
            }
        </section>
    )
}

export default FreeLance