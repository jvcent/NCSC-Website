import Lottie from "lottie-react";
import megaphone from "./assets/megaphone.json";
import xmastree from "./assets/xmastree.json";
import party from "./assets/party.json";
import valentines from "./assets/valentines.json";
import "./Events.css";

const Events = () => {
    return (
        <div id="events-wrapper" className="h-auto w-screen pt-16 lg:pt-24 pb-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:32">
            <div className="h-auto w-full flex flex-col items-start">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="font-semibold drop-shadow-lg text-2xl lg:text-4xl">Upcoming Events</h1>
                    <Lottie animationData={megaphone} className="w-20"/>
                </div>
                <hr className="border-t-[1px] lg:border-t-[2px] border-txt w-full mt-2 mb-4"/>
                

                <div id="event-container" className="h-auto flex flex-row items-center w-full space-x-4 mt-8 pb-4 px-4">
                    <Lottie animationData={xmastree} id="lotties"/>
                    <div className="flex flex-col">
                        <h3 id="event-name" className="mt-2">HOLIDAY PARTY</h3>
                        <h4 id="event-description" className="mt-2">Get ready to kick off the holiday season 
                        with a festive bash at the William Doo Auditorium! Join us for a night 
                        of merriment and groove at our Holiday Party featuring a lively Just Dance 
                        party, Cookie decorating station, hot chocolate bar, and eggnog tasting.</h4>
                        <button id="register-button"
                        className="explore tracking-wider text-white rounded-full mt-8 px-4 lg:px-6 py-2"
                        >REGISTER</button>
                    </div>
                </div>

                <div id="event-container" className="h-auto flex flex-row items-center w-full space-x-4 mt-8 pb-4 px-4">
                    <Lottie animationData={party} id="lotties"/>
                    <div className="flex flex-col">
                        <h3 id="event-name" className="mt-2">WINTER SEMI-FORMAL</h3>
                        <h4 id="event-description" className="mt-2">Get ready to kick off the holiday season 
                        with a festive bash at the William Doo Auditorium! Join us for a night 
                        of merriment and groove at our Holiday Party featuring a lively Just Dance 
                        party, Cookie decorating station, hot chocolate bar, and eggnog tasting.</h4>
                        <button id="register-button"
                        className="explore tracking-wider text-white rounded-full mt-8 px-4 lg:px-6 py-2"
                        >REGISTER</button>
                    </div>
                </div>

                <div id="event-container" className="h-auto flex flex-row items-center w-full space-x-4 mt-8 pb-4 px-4">
                    <Lottie animationData={valentines} id="lotties"/>
                    <div className="flex flex-col"> 
                        <h3 id="event-name" className="mt-2">VALENTINE'S DAY BASH</h3>
                        <h4 id="event-description" className="mt-2">Get ready to kick off the holiday season 
                        with a festive bash at the William Doo Auditorium! Join us for a night 
                        of merriment and groove at our Holiday Party featuring a lively Just Dance 
                        party, Cookie decorating station, hot chocolate bar, and eggnog tasting.</h4>
                        <button id="register-button"
                        className="explore tracking-wider text-white rounded-full mt-8 px-4 lg:px-6 py-2"
                        >REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;