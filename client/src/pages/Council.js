import "./Council.css";
import profile from "./pictures/profile.jpg";
import Lottie from "lottie-react";

const Council = () => {
    return (
        <div id="background-sheet" className="h-auto w-screen pt-16 lg:pt-24 pb-10 px-6 sm:px-10 md:px-16 lg:px-28">
            <div className="h-auto w-full flex flex-col items-center">
                <div id="meet-council" className="flex justify-center whitespace-nowrap px-12">
                    <h1 className="font-semibold drop-shadow-lg text-2xl lg:text-4xl">Meet the Council</h1>
                </div>
                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-3 mb-4">———  Executives  ——— </h2>
                <div className="flex flex-row flex-wrap w-full text-center space-x-4">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NERISSA FENG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">NERISSA FENG</h3>
                        <h4 id="position">PRESIDENT</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="SAMANTHA KELLY CHOW" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">SAMANTHA KELLY CHOW</h3>
                        <h4 id="position">VICE PRESIDENT FINANCE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NAVYA SIDDIQUI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">NAVYA SIDDIQUI</h3>
                        <h4 id="position">VICE PRESIDENT STUDENT LIFE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="DAWEI WANG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">DAWEI WANG</h3>
                        <h4 id="position">VICE PRESIDENT ADMINISTRATION</h4>
                    </div>
                </div>

                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-4 mb-4">————— Representatives —————</h2>
                <div className="flex flex-row flex-wrap w-full text-center">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="DEAN CHEN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">DEAN CHEN</h3>
                        <h4 id="position">FIRST YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="FARHEEN HIRJI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">FARHEEN HIRJI</h3>
                        <h4 id="position">FIRST YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JUSTIN CHIU" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">JUSTIN CHIU</h3>
                        <h4 id="position">MID-YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JEYA SCOTT" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">JEYA SCOTT</h3>
                        <h4 id="position">MID-YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="KALSOOM SHAHZAD" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">KALSOOM SHAHZAD</h3>
                        <h4 id="position">OFF CAMPUS REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NOÉ COFFIN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">NOÉ COFFIN</h3>
                        <h4 id="position">OFF CAMPUS REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="YVONNE CHEN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">YVONNE CHEN</h3>
                        <h4 id="position">GRADUATING YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JOAQUIN ALONSO NAVEDA PAZ" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">JOAQUIN ALONSO NAVEDA PAZ</h3>
                        <h4 id="position">GRADUATING YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="SHAWN KOSHIKAWA" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">SHAWN KOSHIKAWA</h3>
                        <h4 id="position">INTERNATIONAL FOUNDATIONS PROGRAM REPRESENTATIVE</h4>
                    </div>
                </div>

                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-6 mb-4">———  Commissioner  ——— </h2>
                <div className="flex flex-row flex-wrap w-full text-center space-x-4">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="ISAAC NG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">ISAAC NG</h3>
                        <h4 id="position">EDUCATION & PHILANTHROPY COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NOAH BOCHSLER" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">NOAH BOCHSLER</h3>
                        <h4 id="position">ATHLETICS COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NAVYA SIDDIQUI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">RYAN CHAR</h3>
                        <h4 id="position">ATHLETICS COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="SILISCY GAO" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">SILISCY GAO</h3>
                        <h4 id="position">MENTAL HEALTH & WELLNESS COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="HEATHER LIN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">HEATHER LIN</h3>
                        <h4 id="position">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="ANNA LI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">ANNA LI</h3>
                        <h4 id="position">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="ERIC CHEN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">ERIC CHEN</h3>
                        <h4 id="position">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="CATHERINE WANG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">CATHERINE WANG</h3>
                        <h4 id="position">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="AGNES WONG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">AGNES WONG</h3>
                        <h4 id="position"> SUSTAINABILITY COMMISSIONER</h4> 
                    </div>
                </div>

                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-6 mb-4">———  Hired Positions  ——— </h2>
                <div className="flex flex-row flex-wrap w-full text-center space-x-4">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NAWAAL ESSA EBRAHIM" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">NAWAAL ESSA EBRAHIM</h3>
                        <h4 id="position">CLERK</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="MOMO UJI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">MOMO UJI</h3>
                        <h4 id="position">SOCIAL MEDIA MANAGER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JONATHAN VINCENTIUS" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">JONATHAN VINCENTIUS</h3>
                        <h4 id="position">WEB DESIGNER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="SUNG PARK" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">SUNG PARK</h3>
                        <h4 id="position">SPEAKER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="HARGUN KAUR" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">HARGUN KAUR</h3>
                        <h4 id="position">CHIEF RETURNING OFFICER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="AGRATA GUPTA" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name">AGRATA GUPTA</h3>
                        <h4 id="position">DEPUTY RETURNING OFFICER</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Council;