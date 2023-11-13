import "./Contact.css";
import Lottie from "lottie-react";
import contact from "./assets/contact.json";
import email from "./assets/email.json";

const Contact = () => {
    return (
        <div id="contact-parent" className="h-auto w-screen bg-background px-3 md:px-20 lg:px-32 py-14 md:py-18 lg:py-24">
            <div id="container" className="h-auto w-full flex-row p-6 bg-white items-center justify-center rounded-br-[60px] rounded-tl-[60px]">
                <div id="info" className="h-full w-full flex flex-col p-2 lg:p-8 xl:p-10 ">
                    <div>
                        <h1 id="contact-heading" className="font-semibold drop-shadow-lg text-xl md:text-2xl lg:text-4xl">Contact Us</h1>

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

                <div id="form" className="bg-secondary rounded-br-[60px] h-full flex flex-col flex-initial p-10">
                    <div className="flex flex-row flex-initial items-center space-x-2">
                        <h2 id="form-title" className="font-bold text-lg lg:text-xl">Write us a Message!</h2>
                        {/* <Lottie animationData={email} className="w-16" /> */}
                    </div>
                    
                    <form id="contact-form" className="flex flex-col mt-3">
                        <label className="text-sm sm:text-md md:text-lg">Your Name</label>
                        <input type="text" name="user_name" className="bg-primary rounded-xl p-2"/>
                        <label className="text-sm sm:text-md md:text-lg mt-2">Your Email</label>
                        <input type="email" name="user_email" className="bg-primary rounded-xl p-2"/>
                        <label className="text-sm sm:text-md md:text-lg mt-2">Message</label>
                        <textarea name="message" className="bg-primary rounded-xl h-72 p-2"></textarea>

                        <button id="send-btn" className="w-28 mt-4 py-2">
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