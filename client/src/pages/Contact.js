import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2p7qj21', 'template_vbgu28j', form.current, 'n7BbkmdsembQYiv1a')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");

            // Reset the form after successful submission
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div id="contact-parent" className="h-auto w-screen bg-background px-3 md:px-20 lg:px-32 py-14 md:py-18 lg:py-24">
            <div id="container" className="h-auto w-full flex flex-row p-6 bg-white items-center justify-center rounded-br-[60px] rounded-tl-[60px]">
                <div id="info" className="h-full w-full flex flex-col p-2 lg:p-8 xl:p-10 ">
                    <div>
                        <h1 id="contact-heading" className="font-extrabold drop-shadow-lg text-xl md:text-2xl lg:text-4xl">Contact Us</h1>

                        <span id="contact-description" className="py-2 mt-3 flex flex-col space-y-3 text-sm sm:text-md md:text-lg">
                            <span>
                                Please feel free to drop by the NCSC Office at 45 Wilcocks Street to 
                                connect with us, ask questions, and share your thoughts  <br />
                            </span>
                                    
                            <span>
                                Whether you have inquiries about upcoming events, want to get involved in student initiatives, 
                                or simply need a friendly chat, our team is here for you
                            </span>
                        </span>

                        <span id="contact-description" className="py-2 mt-3 flex flex-col space-y-3 text-sm sm:text-md md:text-lg">
                            <span>
                                <span className="font-bold">Get in Touch!</span> <br />
                                General Inquiries - execs@ncsc.ca <br />
                                Student Life - vpstudentlife@ncsc.ca  <br />
                            </span>
                        </span>
                    </div>
                    {/* <div className="w-full flex">
                        <Lottie animationData={contact} className="w-40 sm:w-52 md:w-80 lg:w-96" />
                    </div> */}
                </div>

                <div id="form" className="rounded-br-[60px] w-full h-full flex flex-col flex-initial p-10">
                    <div className="flex flex-row flex-initial items-center space-x-2">
                        <h2 id="form-title" className="font-extrabold text-xl lg:text-2xl">Write us a Message!</h2>
                        {/* <Lottie animationData={email} className="w-16" /> */}
                    </div>
                    
                    <form ref={form} onSubmit={sendEmail} id="contact-form" className="flex flex-col mt-3">
                        <label className="text-sm sm:text-md md:text-lg font-semibold">Your Name</label>
                        <input id="form-input" type="text" name="from_name" className="bg-background2 rounded-xl p-2"/>
                        <label className="text-sm sm:text-md md:text-lg mt-4 font-semibold">Your Email</label>
                        <input id="form-input" type="email" name="user_email" className="bg-background2 rounded-xl p-2"/>
                        <label className="text-sm sm:text-md md:text-lg mt-4 font-semibold">Message</label>
                        <textarea id="form-input" name="message" className="bg-background2 rounded-xl h-72 p-2"></textarea>

                        <button id="send-btn" className="w-28 mt-4 py-2">
                            <input type="submit" value="" />
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;