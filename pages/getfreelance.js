import { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

import { APP_URL, isEmail } from "../comps/constants";
import { CATEGORY } from "../comps/constants";

const GetFreelance = () => {
    const router = useRouter();
    const [freelancer, setFreelancer] = useState([]);

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(`${APP_URL}/get-freelance`);
            setFreelancer(data.freelancers)
        }
        getData();
    }, [])

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