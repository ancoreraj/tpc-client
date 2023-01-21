import { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

import { APP_URL, isEmail } from "../../comps/constants";

export default function Login() {
    const router = useRouter();
    const [verifyText, setVerifyText] = useState(false);
    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token){
            toast('You are already logged in');
            router.push('/');
            return;
        }
    },[]);

    useEffect(()=>{
        if(!router) return;
        let verify = router.query.verify;

        if(verify){
            if(verify === 'true'){
                setVerifyText(true);
            }
        }
    },[router])

    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const [btnDisable, setBtnDisable] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = async () => {
        setBtnDisable(true);
        if(!isEmail(input.email)){
            toast("Enter a valid email id");
            setBtnDisable(false);
            return;
        }

        if(input.password.length < 1){
            toast('Password length should be more than 8 characters')
            setBtnDisable(false);
            return;
        }

        try{
            const response = await axios.post(`${APP_URL}/auth/login`, {
                email: input.email,
                password: input.password
            })

            if(!response.data.check){
                toast(response.data.msg);
                setBtnDisable(false);
                return;
            }

            let userData = response.data.user
            let token = response.data.token

            userData = JSON.stringify(userData)
            token = JSON.stringify(token)

            localStorage.setItem('userData', userData)
            localStorage.setItem('token', token)
            
            toast('You are now logged In');
            setBtnDisable(false);
            router.push('/')

        }catch(err){
            setBtnDisable(false);
            toast(err)
        }
    }

    return (
        <section class="login py-5 border-top-1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8 align-item-center">
                        <div class="border">
                            <h3 class="bg-gray p-4">
                                Login Now</h3>
                                {verifyText && <div className="ml-4" style={{color: 'red'}}><i>Please verify your email before login</i></div>}
                            
                                <fieldset class="p-4">
                                    <input class="form-control mb-3" type="text" placeholder="Email Id*" name="email" value={input.email} onChange={handleChange} required />
                                    <input class="form-control mb-3" type="password" placeholder="Password*" value={input.password} onChange={handleChange} name="password" required />
                                    {/* <div class="loggedin-forgot">
                                        <input type="checkbox" id="keep-me-logged-in" />
                                        <label for="keep-me-logged-in" class="pt-3 pb-2">Keep me logged in</label>
                                    </div> */}
                                    <button disabled={btnDisable} onClick={handleSubmit} class="btn btn-primary font-weight-bold mt-3">Log in</button>
                                    {/* <a class="mt-3 d-block text-primary" href="#!">Forget Password?</a> */}
                                    <div className="mt-2">Don't have an account? <a class="d-inline-block text-primary" href="/auth/register">Sign Up</a></div>
                                   
                                </fieldset>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}