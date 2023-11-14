import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ncsclogo from './assets/ncsc-logo.png';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const [state, setState] = useState(false);
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setState(prevState => !prevState);
    }

    const handleNavClick = (id) => {
        setActive(id);
        if (!(id === "about")) {
            navigate("/" + id);
        }
    }

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
        <div className='sticky z-30 top-0'>
            <div className='bg-gradient-to-b from-white from-60% absolute w-screen flex flex-row justify-between items-center px-8 py-4 lg:px-12 lg:py-4'>
                <span className='cursor-pointer' onClick={() => handleNavClick("")}><img className='h-8 md:h-10 lg:-h-12 mt-2' src={ncsclogo} alt='NCSC Logo'/></span>
                
                <ul className={`lg:text-lg lg:text-xl flex flex-row space-x-8 font-semibold ${state ? "#navbar active" : "#navbar"}`} id='navbar'>
                    <li></li>
                    <li id='item' onClick={() => handleNavClick("events")} 
                    className={`${active === "events" ? "text-logo" : "text-txt"}`}>
                        <NavLink>Events</NavLink>
                    </li >
                    <li id='item' onClick={() => handleNavClick("council")} 
                    className={`${active === "council" ? "text-logo" : "text-txt"}`}>
                        <NavLink>Council</NavLink>
                    </li>
                    <li id='item' onClick={() => handleNavClick("office")} 
                    className={`${active === "office" ? "text-logo" : "text-txt"}`}>
                        <NavLink>Office Hours</NavLink>
                    </li>
                    <li id='item'>
                        <button role="link" className="text-txt"
                            onClick={() => openInNewTab("https://drive.google.com/file/d/1WBB2hjXtIz9I8ehgO2gHaJr68eTmRH4h/view")}
                        >
                            CONSTITUTION
                        </button>
                    </li>
                    <li id='item' onClick={() => handleNavClick("contact")} 
                    className={`${active === "contact" ? "text-logo" : "text-txt"}`}>
                        <NavLink>Contact</NavLink>
                    </li>
                    
                </ul>
                <div id='mobile' onClick={handleButtonClick}>
                        <i id='bar' className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </div>
        
    );
}

export default NavBar;