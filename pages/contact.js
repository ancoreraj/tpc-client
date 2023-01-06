import { useState } from "react"
import axios from "axios";
import { APP_URL } from "../comps/constants";
import { toast } from 'react-toastify';

const Contact = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        contactNo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async () => {
        if(!input.name || !input.email || !input.message || !input.contactNo){
            toast('Please fill all the input fields');
            return;
        }
        try{
            const response = await axios.post(`${APP_URL}/contact-us`, {
                name: input.name,
                email: input.email,
                message: input.message,
                contactNo: input.contactNo
            })

            toast(`Recieved your message, we will get back to you soon`)
        }catch(err){
            toast("Something error happened, please try again.")
        }
    }

    return (
        <>
            <section class="page-title">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us-content p-4">
                                <h5>Contact Us</h5>
                                <h1 class="pt-3">Hello, what's on your mind?</h1>
                                <p class="pt-3 pb-5">Thank you for visiting our website. If you have any questions, comments, or concerns about our products or services, please don't hesitate to contact us. We value your feedback and are here to help in any way that we can. Thank you for choosing us as your source for academic resources.</p>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <fieldset class="p-4">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-lg-6 py-2">
                                            <input type="text" placeholder="Name *" class="form-control"
                                                name="name"
                                                value={input.name}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                        <div class="col-lg-6 py-2">
                                            <input type="text" placeholder="Contact No *" class="form-control"
                                                name="contactNo"
                                                value={input.contactNo}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                        <div class="col-lg-6 pt-2">
                                            <input type="email" placeholder="Email *" class="form-control"
                                                name="email"
                                                value={input.email}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <textarea name="message"
                                    onChange={handleChange}
                                    value={input.message} id="" placeholder="Message *" class="border w-100 p-3 mt-1"></textarea>
                                <div class="btn-grounp">
                                    <button onClick={handleSubmit} class="btn btn-success mt-2 float-right">SUBMIT</button>
                                </div>
                            </fieldset>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact