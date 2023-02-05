import { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

import { APP_URL } from "../comps/constants";
import { CATEGORY, FREELANCE_CATEGORY } from "../comps/constants";

const GetFreelance = () => {
    const router = useRouter();
    const [idx, setIdx] = useState(-1);
    const [freelancer, setFreelancer] = useState([]);
    const [orderId, setOrderId] = useState('');
    const [btnDisable, setBtnDisable] = useState(false);

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(`${APP_URL}/get-freelance`);
            setFreelancer(data.freelancers)
        }
        getData();
    }, [])


    const getCategory = (user) => {
        let category = [];
        let userCategory = user.category;
        userCategory = userCategory.split(",");
        FREELANCE_CATEGORY.map((cat) => {
            userCategory.map((id) => {
                if(cat.id === id){
                    category.push(cat.val);
                }
            })
        })
        return category.join(", ");
    }

    const handleClick = (idx) => {
        setIdx(idx);
    }

    const handleSendOrder = async (user) => {
        setBtnDisable(true);
        if(orderId.length === 0){
            toast('Please Enter the OrderId');
            setBtnDisable(false)
            return;
        }
        const body = {
            orderId: orderId,
            category: user.category,
            email: user.email,
        }

        try{
            const {data} = await axios.post(`${APP_URL}/set-freelance`, body);

            if(!data.check){
                setBtnDisable(false);
                toast(data.msg);
                return;
            }

            toast(data.msg);
            setBtnDisable(false);
            setIdx(-1);
            setOrderId('');
            
        }catch(err){

        }
    }

    return (
        <section class="user-profile section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="widget welcome-message">
                            <h2>All <b>Freelancer</b> Data</h2>
                            {
                                freelancer.map((user, index) => {
                                    return (
                                        <>
                                            <h6 className="mt-2">{index + 1}.</h6>
                                            <ul class="category-list ml-3">
                                                <li><b>Name: </b>{user.name}</li>
                                                <li><b>Email: </b>{user.email}</li>
                                                <li><b>ContactNo: </b>{user.contactNo}</li>
                                                <li><b>Category: </b>{getCategory(user)}</li>
                                                <li><b>UpiId: </b>{user.upiId}</li>
                                                <li><b>Account No: </b>{user.accountNo}</li>
                                                <li><b>Ifsc Code: </b>{user.ifscCode}</li>
                                                <li><b>Aadhar Card: </b><a href={user.aadharCard} target="_blank">Link</a></li>
                                                <li><b>Pincode: </b>{user.pincode}</li>
                                                <li><b>Address: </b>{user.address}</li>
                                                {index !== idx && <li><button onClick={() => handleClick(index)} className="mt-3 nav-link text-white add-button p-2">Select</button></li>}
                                                {index === idx && 
                                                    <li>
                                                    <input 
                                                        type="text" 
                                                        class="form-control mt-3" 
                                                        placeholder="Enter Order Id"
                                                        value={orderId}
                                                        onChange={(e) => setOrderId(e.target.value)}
                                                    />
                                                    <button disabled={btnDisable} onClick={() => handleSendOrder(user)} className="mt-3 btn btn-success">Add Partner to order</button>
                                                    </li>
                                                }
                                            </ul>
                                        </>
                                    ) 

                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetFreelance