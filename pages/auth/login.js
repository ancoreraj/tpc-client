import { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

import { APP_URL, isEmail } from "../../comps/constants";

export default function Login() {
    const router = useRouter();

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token){
            toast('You are already logged in');
            router.push('/');
            return;
        }
    },[]);

    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = async () => {
        if(!isEmail(input.email)){
            toast("Enter a valid email id");
            return;
        }

        if(input.password.length < 1){
            toast('Password length should be more than 8 characters')
            return;
        }

        try{
            const response = await axios.post(`${APP_URL}/auth/login`, {
                email: input.email,
                password: input.password
            })

            let userData = response.data.user
            let token = response.data.token

            userData = JSON.stringify(userData)
            token = JSON.stringify(token)

            localStorage.setItem('userData', userData)
            localStorage.setItem('token', token)
            
            toast('You are now logged In')
            router.push('/')

        }catch(err){
            toast(err)
        }
    }

    return (
        <section class="login py-5 border-top-1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8 align-item-center">
                        <div class="border">
                            <h3 class="bg-gray p-4">Login Now</h3>
                            
                                <fieldset class="p-4">
                                    <input class="form-control mb-3" type="text" placeholder="Email Id*" name="email" value={input.email} onChange={handleChange} required />
                                    <input class="form-control mb-3" type="password" placeholder="Password*" value={input.password} onChange={handleChange} name="password" required />
                                    {/* <div class="loggedin-forgot">
                                        <input type="checkbox" id="keep-me-logged-in" />
                                        <label for="keep-me-logged-in" class="pt-3 pb-2">Keep me logged in</label>
                                    </div> */}
                                    <button onClick={handleSubmit} class="btn btn-primary font-weight-bold mt-3">Log in</button>
                                    {/* <a class="mt-3 d-block text-primary" href="#!">Forget Password?</a> */}
                                    <a class="ml-3 d-inline-block text-primary" href="/auth/register">Register Now</a>
                                </fieldset>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}