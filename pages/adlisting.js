import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { storage } from "./../comps/firebase";
import { CATEGORY } from '../comps/constants'

const validateInput = (input, address) => {
    if(!input.title || ! input.description || !address.name || !address.pincode || !address.number || !address.address){
        alert(`Please fill all input fields`);
        return false;
    }

    if(input.category === 0) {
        alert(`Please select correct category`);
        return false;
    }

    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[3456789]\d{9}$/gm
    if(!regex.test(address.number)){
        alert('Enter a correct phone number');
        return false;
    }

    if(address.pincode.length !== 6){
        alert('Enter a correct pincode');
        return false;
    }

    return true;
}

const AdListing = () => {
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState('');
    const [btnDisable, setBtnDisable] = useState(false);
    const [input, setInput] = useState({
        title: '',
        description: '',
        category: 0,
    })

    const [address, setAddress] = useState({
        name: '',
        number: '',
        pincode: '',
        address: '',
    })

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0])
    }, []);

    const handleSubmit = () => {
        setBtnDisable(true);
        if(!validateInput(input,address)){
            setBtnDisable(false)
            return;
        }

        if (!file) {
            setBtnDisable(false);
            alert(`Please select your file`);
            return;
        }

        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(prog);
            },
            (error) =>{
                
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFileUrl(downloadURL);
                    console.log("File available at", downloadURL);
                });
            }
        );

        const body = {
            title: input.title,
            description: input.description,
            fileUrl,
            category: input.category,
            name: address.name,
            number: address.number,
            address: address.address,
            pincode: address.pincode,
        }

        

        setBtnDisable(false);

    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleAddressChange = (e) => {
        const { name, value } = e.target
        setAddress((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <section class="advt-post bg-gray py-5">
            <div class="container">
                
                <fieldset class="border border-gary px-3 px-md-4 py-4 mb-5">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Post Your requirement</h3>
                        </div>
                        <div class="col-lg-6">
                            <h6 class="font-weight-bold pt-4 pb-1">Title</h6>
                            <input type="text" class="form-control bg-white" name='title' value={input.title} onChange={handleInputChange} placeholder="Enter the title here" required />
                            <h6 class="font-weight-bold pt-4 pb-1">Description:</h6>
                            <textarea name="description" value={input.description} onChange={handleInputChange} class="form-control bg-white" rows="7"
                                placeholder="Write details about your requirement" required></textarea>
                        </div>
                        <div class="col-lg-6">
                            <h6 class="font-weight-bold pt-4 pb-1">Select Your Category</h6>
                            <select name="category" value={input.category} onChange={handleInputChange} class="form-control w-100 bg-white" id="inputGroupSelect">
                                <option value="0">Select category</option>

                                {CATEGORY.map((cat) => {
                                    return (
                                        <option key={cat.id} value={cat.id}>{cat.val}</option>
                                    )
                                })}
                            </select>

                            <h6 class="font-weight-bold pt-4 pb-1">Drop your file here:</h6>

                            <div class="choose-file text-center my-4 py-4 rounded bg-white">

                                <label for="file-upload">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {file ?
                                            <span style={{ height: '128px' }} class="d-block font-weight-bold text-dark">{file?.name}</span>
                                            :
                                            <>
                                                <span class="d-block font-weight-bold text-dark">Drop files anywhere to upload</span>
                                                <span class="d-block">or</span>
                                                <span class="d-block btn bg-primary text-white my-3 select-files">Select files</span>
                                                <span class="d-block">Maximum upload file size: 500 KB</span>
                                            </>
                                        }

                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="border px-3 px-md-4 py-4 my-5 seller-information bg-gray">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Delivery Address</h3>
                        </div>
                        <div class="col-lg-6">
                            <h6 class="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                            <input name='name' value={address.name} onChange={handleAddressChange} type="text" placeholder="Enter your name" class="form-control bg-white" required />
                            <h6 class="font-weight-bold pt-4 pb-1">Contact Number:</h6>
                            <input name='number' value={address.number} onChange={handleAddressChange} type="text" placeholder="Enter your contact number" class="form-control bg-white" required />
                        </div>
                        <div class="col-lg-6">
                            <h6 class="font-weight-bold pt-4 pb-1">Contact Pincode</h6>
                            <input name='pincode' value={address.pincode} onChange={handleAddressChange} type="text" placeholder="XX-XX-XX" class="form-control bg-white" required />
                            <h6 class="font-weight-bold pt-4 pb-1">Contact Address:</h6>
                            <input name='address' value={address.address} onChange={handleAddressChange} type="text" placeholder="Enter your full delivery address" class="form-control bg-white" required />
                        </div>
                    </div>
                </fieldset>
                <div class="price">
                    <h6 class="font-weight-bold pt-4 pb-1">Total Price</h6>
                    <div class="row px-3">
                        <div class="col-lg-4 rounded px-0">
                            <div>₹ 550</div>
                        </div>
                    </div>
                </div>
                <button disabled={btnDisable} onClick={handleSubmit} class="btn btn-primary d-block mt-5">Place your order</button>

            </div>
        </section>
    )
}

export default AdListing