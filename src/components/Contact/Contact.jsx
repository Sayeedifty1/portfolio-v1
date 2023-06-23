
import { ImLinkedin } from 'react-icons/im';
import { RiWhatsappFill } from 'react-icons/ri';
import {HiMail} from 'react-icons/hi'
import './Contact.css'
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_a1kv667",
                "template_fwr3m74",
                form.current,
                "AttIBphA5FXBcYjpV"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    alert("Email sent successfully!"); 
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact">
            <div className="container mx-auto dark:bg-black dark:text-white p-10">
                <h1 className="text-4xl font-bold text-center my-36">Contact Me</h1>
                <div className="row">
                    <div className="contactLeft mb-8">
                        {/* left icons */}
                        <p className='inline-flex'><HiMail className='text-2xl mr-2 hover:text-red-500'></HiMail> md.abusayeedifty@gmail.com</p>
                        <p className='mb-2 flex'><RiWhatsappFill className='hover:text-green-600 text-2xl mr-2'></RiWhatsappFill><span>(+880)1882021206</span></p>
                        <a href="https://www.linkedin.com/in/md-abu-sayeed-ifty-8b047b1a6/"><ImLinkedin className='mb-2 text-xl hover:text-blue-500 inline-flex mr-2 '></ImLinkedin>LinkedIn</a>
                   
                    </div>
                    <div className="contactRight">
                    <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input className="" type="submit" value="Send Message" />
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;