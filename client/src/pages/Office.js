import "./Office.css";
import Lottie from "lottie-react"
import officehours from "./assets/officehours.png";
import calendar from "./assets/calendar.json";

const Office = () => {
    return (
        <div className="h-screen w-screen bg-background flex items-center justify-center 
        py-6 lg:py-12 xl:py-20 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-48">
            <div id="office-wrapper" className="flex flex-col h-full w-full space-y-4 items-center justify-center">
                <div id="topper" className="w-full h-20 flex flex-col items-center justify-end px-6">
                    <div className="flex flex-row space-x-2 items-end">
                        <h1 id="office-heading" className="font-semibold drop-shadow-lg text-md">Office Hours</h1>
                        <Lottie animationData={calendar} className="w-12 md:w-24 lg:w-32 xl:w-40"/>
                    </div>
                    <text id="office-description" className="max-w-3xl py-2 text-center flex flex-col space-y-3 ">
                        <span>
                        Please feel free to drop by the NCSC Office at 45 Wilcocks Street to 
                        connect with us, ask questions, and share your thoughts  <br />
                        </span>
                            
                        <span>
                        Whether you have inquiries about upcoming events, want to get involved in student initiatives, 
                        or simply need a friendly chat, our team is here for you
                        </span>
                    </text>
                </div>
                <div className="h-grow w-full flex justify-center">
                    <img className="object-scale-down rounded-b-[40px]" src={officehours} alt="Office Hour Timetable" />
                </div>
            </div>
        </div>
    );
}

export default Office;