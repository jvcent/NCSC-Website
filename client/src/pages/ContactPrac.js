import Lottie from "lottie-react";
import contact from "./assets/contact.json";
import email from "./assets/email.json";

const ContactPrac = () => {
    return (
        <div id="header-container" className="w-screen flex flex-row flex-wrap h-full px-6 lg:px-12 justify-center justify-around pb-20">
                        <div id="headers" className="flex flex-col items-center h-auto w-1/3">
                            <Lottie animationData={hero} className="w-24 md:w-36 lg:w-52 xl:w-72"/>
                            <h2 id="info-title" className="font-semibold">Events & Activities</h2>
                            <span id="info" className="text-center mt-3 flex break-words p-6">Organizing a variety of events and activities that cater to diverse interests and preferences 
                                within the student body. Creating platforms for fostering a sense of community</span>
                        </div>
                        <div id="headers" className="flex flex-col items-center w-1/3">
                            <Lottie animationData={speech} className="w-24 md:w-36 lg:w-52 xl:w-72"/>
                            <h2 id="info-title" className="font-semibold">Student Advocacy</h2>
                            <span id="info" className="text-center mt-3 break-words p-6">Fostering a sense of community by creating platforms for students to connect and build relationships. 
                                Helping to address all issues involving academic policies, facilities, and student services</span>
                        </div>
                        <div id="headers" className="flex flex-col items-center w-1/3">
                            <Lottie animationData={resources} className="w-24 md:w-36 lg:w-52 xl:w-72"/>
                            <h2 id="info-title" className="font-semibold">Resources & Support</h2>
                            <span id="info" className="text-center mt-3 break-words p-6">Providing resources and support systems all various kinds to assist students in navigating academic 
                                challenges, personal development, and campus life</span>
                        </div>
                    </div>
    );
}

export default ContactPrac;