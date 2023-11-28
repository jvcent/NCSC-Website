import "./Council.css";
import profile from "./pictures/profile.jpg";
import boyan from "./pictures/boyan.jpg";
import eric from "./pictures/eric.png";
import isaac from "./pictures/isaac.jpg";
import momo from "./pictures/momo.jpg";
import noe from "./pictures/noe.jpg";
import ryan from "./pictures/ryan.jpg";
import siliscy from "./pictures/siliscy.jpg";
import sung from "./pictures/sung.jpeg";
import yvonne from "./pictures/yvonne.jpg";
import dawei from "./pictures/dawei.jpg";
import sam from "./pictures/sam.png";
import dean from "./pictures/dean.jpeg";
import noah from "./pictures/noah.JPG";
import catherine from "./pictures/catherine.jpg";
import agnes from "./pictures/agnes.jpg";
import anna from "./pictures/anna.jpg";
import jeya from "./pictures/jeya.jpg";

const Council = () => {
    return (
        <div id="background-sheet" className="h-auto w-screen pt-16 lg:pt-24 pb-10 px-6 sm:px-10 md:px-16 lg:px-28">
            <div className="h-auto w-full flex flex-col items-center">
                <div id="meet-council" className="flex justify-center whitespace-nowrap px-12">
                    <h1 className="font-semibold drop-shadow-lg text-2xl lg:text-4xl">Meet the Council</h1>
                </div>
                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-3 mb-4">—— &nbsp; Executives &nbsp; —— </h2>
                <div className="flex flex-row flex-wrap w-full text-center space-x-4">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NERISSA FENG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">NERISSA FENG</h3>
                        <h4 id="position" className="mt-1">PRESIDENT</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={sam} alt="SAMANTHA KELLY CHOW" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">SAMANTHA KELLY CHOW</h3>
                        <h4 id="position" className="mt-1">VICE PRESIDENT FINANCE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NAVYA SIDDIQUI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">NAVYA SIDDIQUI</h3>
                        <h4 id="position" className="mt-1">VICE PRESIDENT STUDENT LIFE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={dawei} alt="DAWEI WANG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">DAWEI WANG</h3>
                        <h4 id="position" className="mt-1">VICE PRESIDENT ADMINISTRATION</h4>
                    </div>
                </div>

                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-4 mb-4">———— &nbsp; Representatives &nbsp; ————</h2>
                <div className="flex flex-row flex-wrap w-full text-center">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={dean} alt="DEAN CHEN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">DEAN CHEN</h3>
                        <h4 id="position" className="mt-1">FIRST YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="FARHEEN HIRJI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">FARHEEN HIRJI</h3>
                        <h4 id="position" className="mt-1">FIRST YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JUSTIN CHIU" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">JUSTIN CHIU</h3>
                        <h4 id="position" className="mt-1">MID-YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={jeya} alt="JEYA SCOTT" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">JEYA SCOTT</h3>
                        <h4 id="position" className="mt-1">MID-YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="KALSOOM SHAHZAD" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">KALSOOM SHAHZAD</h3>
                        <h4 id="position" className="mt-1">OFF CAMPUS REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={noe} alt="NOÉ COFFIN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">NOÉ COFFIN</h3>
                        <h4 id="position" className="mt-1">OFF CAMPUS REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={yvonne} alt="YVONNE CHEN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">YVONNE CHEN</h3>
                        <h4 id="position" className="mt-1">GRADUATING YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JOAQUIN ALONSO NAVEDA PAZ" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">JOAQUIN ALONSO NAVEDA PAZ</h3>
                        <h4 id="position" className="mt-1">GRADUATING YEAR REPRESENTATIVE</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="SHAWN KOSHIKAWA" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">SHAWN KOSHIKAWA</h3>
                        <h4 id="position" className="mt-1">INTERNATIONAL FOUNDATIONS PROGRAM REPRESENTATIVE</h4>
                    </div>
                </div>

                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-6 mb-4">——— &nbsp; Commissioner &nbsp; ——— </h2>
                <div className="flex flex-row flex-wrap w-full text-center space-x-4">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={isaac} alt="ISAAC NG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">ISAAC NG</h3>
                        <h4 id="position" className="mt-1">EDUCATION & PHILANTHROPY COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={noah} alt="NOAH BOCHSLER" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">NOAH BOCHSLER</h3>
                        <h4 id="position" className="mt-1">ATHLETICS COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={ryan} alt="RYAN CHAR" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">RYAN CHAR</h3>
                        <h4 id="position" className="mt-1">ATHLETICS COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={siliscy} alt="SILISCY GAO" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">SILISCY GAO</h3>
                        <h4 id="position" className="mt-1">MENTAL HEALTH & WELLNESS COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="HEATHER LIN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">HEATHER LIN</h3>
                        <h4 id="position" className="mt-1">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={anna} alt="ANNA LI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">ANNA LI</h3>
                        <h4 id="position" className="mt-1">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={eric} alt="ERIC CHEN" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">ERIC CHEN</h3>
                        <h4 id="position" className="mt-1">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={catherine} alt="CATHERINE WANG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">CATHERINE WANG</h3>
                        <h4 id="position" className="mt-1">SOCIAL COMMISSIONER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={boyan} alt="BOYAN XUE" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">BOYAN XUE</h3>
                        <h4 id="position" className="mt-1">EQUITY COMMISSIONER</h4> 
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={agnes} alt="AGNES WONG" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">AGNES WONG</h3>
                        <h4 id="position" className="mt-1"> SUSTAINABILITY COMMISSIONER</h4> 
                    </div>
                </div>

                <h2 id="categories" className="font-bold text-lg lg:text-xl mt-6 mb-4">——— &nbsp; Hired Positions &nbsp; ——— </h2>
                <div className="flex flex-row flex-wrap w-full text-center space-x-4">
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="NAWAAL ESSA EBRAHIM" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">NAWAAL ESSA EBRAHIM</h3>
                        <h4 id="position" className="mt-1">CLERK</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={momo} alt="MOMO UJI" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">MOMO UJI</h3>
                        <h4 id="position" className="mt-1">SOCIAL MEDIA MANAGER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="JONATHAN VINCENTIUS" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">JONATHAN VINCENTIUS</h3>
                        <h4 id="position" className="mt-1">WEB DESIGNER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={sung} alt="SUNG PARK" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">SUNG PARK</h3>
                        <h4 id="position" className="mt-1">SPEAKER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="HARGUN KAUR" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">HARGUN KAUR</h3>
                        <h4 id="position" className="mt-1">CHIEF RETURNING OFFICER</h4>
                    </div>
                    <div id="card" className="flex flex-col items-center">
                        <div className="h-52 w-52 bg-background rounded-full p-3 my-3">
                            <img src={profile} alt="AGRATA GUPTA" className="rounded-full object-cover"/>
                        </div>
                        <h3 id="name" className="mt-1">AGRATA GUPTA</h3>
                        <h4 id="position" className="mt-1">DEPUTY RETURNING OFFICER</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Council;