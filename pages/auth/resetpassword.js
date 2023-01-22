import { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { APP_URL, isEmail } from "../../comps/constants";

export default function ResetPassword() {
    const router = useRouter();
    const [codeView, setCodeView] = useState(false);

    const [input, setInput] = useState({
        email: "",
    })
    const [input2, setInput2] = useState({
        email: "",
        password: "",
        newPassword: "",
        code: ""
    })
    const [btnDisable, setBtnDisable] = useState(false);
    const [btnDisable2, setBtnDisable2] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value }));
    }

    const handle2Change = (e) => {
        const { name, value } = e.target
        setInput2((prevState) => ({...prevState, [name]: value }));
    }

    const handleSubmit = async () => {
        setBtnDisable(true);
        if (!isEmail(input.email)) {
            toast("Enter a valid email id");
            setBtnDisable(false);
            return;
        }

        try {
            const response = await axios.post(`${APP_URL}/auth/reset-password`, {
                email: input.email,
            })

            if (!response.data.check) {
                toast(response.data.msg);
                setBtnDisable(false);
                return;
            }

            toast(response.data.msg);
            setCodeView(true);
            setBtnDisable(false);
        } catch (err) {
            setBtnDisable(false);
            toast(err)
        }
    }

    const handleSubmit2 = async () => {
        setBtnDisable2(true);

        if(!input2.email || !input2.password || !input2.newPassword || !input2.code){
            toast("Please fill all the input values");
            setBtnDisable2(false);
            return;
        }
        if(!isEmail(input2.email)){
            toast("Enter a valid email id");
            setBtnDisable2(false);
            return;
        }

        if(input2.password !== input2.newPassword){
            toast("Password Do not match");
            setBtnDisable2(false);
            return;
        }

        try {
            const response = await axios.post(`${APP_URL}/auth/reset`, {
                email: input2.email,
                password: input2.password,
                code: input2.code,
            })

            if (!response.data.check) {
                toast(response.data.msg);
                setBtnDisable2(false);
                return;
            }
            
            toast(response.data.msg);
            router.push("/auth/login");
            setCodeView(true);
            setBtnDisable2(false);
        } catch (err) {
            setBtnDisable2(false);
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
                                Reset Password</h3>

                            {!codeView &&
                                <fieldset class="p-4">
                                    <input class="form-control mb-3" type="text" placeholder="Email Id*" name="email" value={input.email} onChange={handleChange} required />
                                    <button disabled={btnDisable} onClick={handleSubmit} class="btn btn-primary font-weight-bold mt-3">Reset Password</button>
                                </fieldset>
                            }

                            {
                                codeView &&
                                <fieldset class="p-4">
                                    <input class="form-control mb-3" type="email" placeholder="Email*" value={input2.email} onChange={handle2Change} name="email" required />

                                    <input class="form-control mb-3" type="password" placeholder="New Password*" value={input2.password} onChange={handle2Change} name="password" required />

                                    <input class="form-control mb-3" type="password" placeholder="Re-Enter Password*" value={input2.newPassword} onChange={handle2Change} name="newPassword" required />

                                    <input class="form-control mb-3" type="text" placeholder="Reset Code*" value={input2.code} onChange={handle2Change} name="code" required />

                                    <button disabled={btnDisable2} onClick={handleSubmit2} class="btn btn-primary font-weight-bold mt-3">Reset Password</button>

                                </fieldset>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}