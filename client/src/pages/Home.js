import "./Home.css";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import sky from "./assets/sky.png";
import park from "./assets/park.png";
import students from "./assets/students.json";
import building from "./assets/building.json";
import graduate from "./assets/graduate.json";
import studying from "./assets/studying.json";
import council from "./assets/council.json";
import thinker from "./assets/thinker.json";
import hero from "./assets/hero.json";
import megaphone from "./assets/megaphone.json";
import resources from "./assets/resources.json";
import speech from "./assets/speech.json";

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/about")
    }

    return (
        <div className="flex flex-col h-auto">
            <div className="h-screen w-screen bg-cover bg-center z-0" style={{ backgroundImage: `url(${sky})` }}>
                <div className="h-full w-full bg-cover bg-center z-10 flex flex-col items-center" style={{ backgroundImage: `url(${park})` }}>
                    <div className="text-txt flex flex-col items-center mt-72" id="core">
                        <h1 className="font-semibold drop-shadow-lg" id="heading">Welcome to the New College Student Council Website</h1>
                        <span className="w-3/5 text-center" id="description">Discover your gateway to an exciting and inclusive community at the University of Toronto. Get to know your student representatives and stay updated on the latest events, news, and initiatives that make your college experience unforgettable.</span>
                        <button 
                        className="explore tracking-wider text-[10px] md:text-base lg:text-md xl:text-lg mt-8 px-6 xl:px-8 py-2 md:py-3"
                        onClick={handleButtonClick}>EXPLORE</button>
                    </div>
                </div>
            </div>

            <div className="h-auto w-screen bg-background flex flex-col text-txt">
                <div className="h-auto border-b-4 bg-white flex flex-row flex-wrap justify-around items-center py-2 px-2 text-lg font-semibold">
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
                <div id="about" className="h-auto w-screen ">
                    Hello
                </div>
            </div>
        </div>
        
    );
}

export default Home;