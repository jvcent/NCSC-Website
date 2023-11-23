import "./Home.css";
import { HashLink } from 'react-router-hash-link';
import Lottie from "lottie-react";
import sky from "./assets/sky.png";
import park from "./assets/park.png";
import students from "./assets/students.json";
import building from "./assets/building.json";
import graduate from "./assets/graduate.json";
import studying from "./assets/studying.json";
import council from "./assets/council.json";
import hero from "./assets/hero.json";
import resources from "./assets/resources.json";
import speech from "./assets/speech.json";
import { useEffect } from "react";

// import thinker from "./assets/thinker.json";
// import megaphone from "./assets/megaphone.json";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="flex flex-col h-auto w-screen">
            <div id="landing" className="h-screen w-screen bg-cover bg-center z-0" style={{ backgroundImage: `url(${sky})` }}>
                <div className="h-full w-full bg-cover bg-center z-10 flex flex-col items-center" style={{ backgroundImage: `url(${park})` }}>
                    <div className="text-txt flex flex-col items-center mt-72" id="core">
                        <h1 className="font-semibold drop-shadow-lg text-md" id="heading">Welcome to the New College Student Council Website</h1>
                        <span className="w-3/5 text-center" id="description">
                            Discover your gateway to an exciting and inclusive community at the University of Toronto. Get to know your student 
                            representatives and stay updated on the latest events, news, and initiatives that make your college experience unforgettable.</span>
                        <HashLink smooth to='/#about' ><button id="explore-button"
                        className="explore tracking-wider text-white rounded-full text-[10px] md:text-base lg:text-md xl:text-lg mt-8 px-6 xl:px-8 py-1.5 sm:py-2 md:py-3"
                        >EXPLORE</button></HashLink>
                        
                    </div>
                </div>
            </div>

            <div className="h-auto w-screen bg-background flex flex-col text-txt">
                <div id="stats" className="z-10 h-auto border-b-4 bg-white flex flex-row flex-wrap justify-around items-center py-2 px-2 text-lg font-semibold">
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="text-xs sm:text-base md:text-lg lg:text-xl">6000+ <br/> Students</span>
                        <Lottie animationData={studying} className="w-20 lg:w-40"/>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="text-xs sm:text-base md:text-lg lg:text-xl">Founded <br/> in 1962</span>
                        <Lottie animationData={building} className="w-20 lg:w-40"/>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="text-xs sm:text-base md:text-lg lg:text-xl">33 Council <br/> Members</span>
                        <Lottie animationData={council} className="w-20 lg:w-40"/>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="text-xs sm:text-base md:text-lg lg:text-xl">7 Recognised <br/> Students Groups</span>
                        <Lottie animationData={students} className="w-20 lg:w-40"/>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="text-xs sm:text-base md:text-lg lg:text-xl">27000 <br/> Alumni</span>
                        <Lottie animationData={graduate} className="w-24 lg:w-48"/>
                    </div>
                </div>
                <div id="about" className="h-auto w-screen z-0 flex flex-col items-center">
                    <div id="slanted" className="w-screen bg-primary h-auto pt-6 md:pt-12 lg:pt-20 px-12 pb-10 lg:pb-24 flex flex-col items-center justify-center">
                        <h1 id="about-heading" className="font-semibold drop-shadow-lg text-md">Who are We?</h1>
                        <hr className="border-t-[1px] lg:border-t-[3px] border-txt w-3/5 mt-4 mb-4"/>
                        <span id="about-description" className="max-w-4xl text-center flex flex-col space-y-3 ">
                            <span>
                            We are the official representatives of the 
                            students of New College in matters pertaining to the student body as a whole. <br />
                            </span>
                            
                            <span>
                            We strive to foster 
                            a sense of community, provide resources for personal and academic growth. Every initiative and 
                            project we undertake is guided by our commitment to enriching 
                            student life. 
                            </span>
                        </span>
                    </div>
                    <div id="header-container" className="w-screen flex flex-row px-6 lg:px-12 justify-center justify-around pb-20">
                        <div id="header" className="flex flex-col items-center">
                            <Lottie animationData={hero} className="w-24 md:w-36 lg:w-52 xl:w-72"/>
                            <h2 id="info-title" className="font-semibold">Events & Activities</h2>
                            <span id="des" className="text-center mt-3 break-words p-3">Organizing a variety of events and activities that cater to diverse interests and preferences 
                                within the student body. Creating platforms for fostering a sense of community</span>
                        </div>
                        <div id="header" className="flex flex-col items-center">
                            <Lottie animationData={speech} className="w-24 md:w-36 lg:w-52 xl:w-72"/>
                            <h2 id="info-title" className="font-semibold">Student Advocacy</h2>
                            <span id="des" className="text-center mt-3 break-words p-3">Fostering a sense of community by creating platforms for students to connect and build relationships. 
                                Helping to address all issues involving academic policies, facilities, and student services</span>
                        </div>
                        <div id="header" className="flex flex-col items-center">
                            <Lottie animationData={resources} className="w-24 md:w-36 lg:w-52 xl:w-72"/>
                            <h2 id="info-title" className="font-semibold">Resources & Support</h2>
                            <span id="des" className="text-center mt-3 break-words p-3">Providing resources and support systems all various kinds to assist students in navigating academic 
                                challenges, personal development, and campus life</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Home;