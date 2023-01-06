import { useState } from "react"
import { useRouter } from 'next/router'
import axios from "axios"
import { toast } from 'react-toastify';

import { APP_URL, isEmail } from "../../comps/constants"

const Register = () => {
    const router = useRouter();

    const [input, setInput] = useState({
        email: "",
        password: "",
        cPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = async () => {

        if(!isEmail(input.email)){
            toast('Enter a valid email id')
            return;
        }

        if(input.password !== input.cPassword){
            toast('Password do not match')
            return;
        }

        if(input.password.length < 8){
            toast('Password length should be more than 8 characters')
            return;
        }

        try{
            const response = await axios.post(`${APP_URL}/auth/register`, {
                email: input.email,
                password: input.password
            })

            toast("You are registered, please verify your email then login.")
            router.push("/auth/login")

        }catch(err) {
            toast("Something error happened, please try again.")
        }

    }

    return (
        <section className="login py-5 border-top-1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 align-item-center">
                        <div className="border border">
                            <h3 className="bg-gray p-4">Register Now</h3>
                            
                                <fieldset className="p-4">
                                    <input className="form-control mb-3" type="email" placeholder="Email*" name="email" value={input.email} onChange={handleChange} required />
                                    <input className="form-control mb-3" type="password" placeholder="Password*" name="password" value={input.password} onChange={handleChange} required />
                                    <input className="form-control mb-3" type="password" placeholder="Confirm Password*" name="cPassword" value={input.cPassword} onChange={handleChange} required />
                                    {/* <div className="loggedin-forgot d-inline-flex my-3">
                                        <input type="checkbox" id="registering" className="mt-1" />
                                        <label for="registering" className="px-2">By registering, you accept our <a className="text-primary font-weight-bold" href="terms-condition.html">Terms & Conditions</a></label>
                                    </div> */}
                                    <button onClick={handleSubmit} className="btn btn-primary font-weight-bold mt-3">Register Now</button>
                                </fieldset>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Register