import { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

import { APP_URL, isEmail } from "../../comps/constants";
import { CATEGORY } from "../../comps/constants";

const convertToDDMMYYHHMM = (time) => {
    var date = new Date(time);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return `${day}/${month}/${year.toString().slice(-2)} - ${hours}:${minutes}`;
}

const Profile = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getData() {
            const headers = {
                'Content-Type': 'application/json',
                'authorization': `Token ${JSON.parse(localStorage.getItem('token'))}`
            }
            const { data } = await axios.get(`${APP_URL}/auth/profile`, {headers});
            setUser(data.user);
            setOrders(data.orders);
        }
        getData();
    }, [])

    console.log(orders);
    const getCategory = (user) => {
        let category;
        CATEGORY.map((cat) => {
            if (cat.id === user.category) {
                category = cat.val;
            }
        })
        return category;
    }

    return (
        <section class="user-profile section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="widget welcome-message">
                            <h2><b>User Profile</b></h2>
                            <h3 className="mt-5">My Orders</h3>
                            {  orders.length > 0 ?
                                orders.map((order, index) => {
                                    return (
                                        <>
                                            <h6 className="mt-2">{index + 1}.</h6>
                                            <ul class="category-list ml-3">
                                                <li><b>Order Id: </b>{order._id}</li>
                                                <li><b>Title: </b>{order.title}</li>
                                                <li><b>Description: </b>{order.description}</li>
                                                <li><b>Filr Url: </b><a href={order.fileUrl} target="_blank">Link</a></li>
                                                <li><b>Pincode: </b>{order.pincode}</li>
                                                <li><b>Address: </b>{order.address}</li>
                                                <li><b>Orderd At: </b>{convertToDDMMYYHHMM(order.createdAt)}</li>
                                                <li><b>Amount Paid: </b>{order.price}</li>

                                                

                                            </ul>
                                        </>
                                    )

                                }) 
                                :
                                <div>No Orders</div>
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile