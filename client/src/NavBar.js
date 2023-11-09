import { useState } from 'react';
import ncsclogo from './assets/ncsc-logo.png'
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const [state, setState] = useState(false);

    const handleButtonClick = () => {
        setState(prevState => !prevState);
    }

    return (
        <div className='absolute w-screen top-0 z-10 flex flex-row justify-between items-center px-8 py-4 lg:px-12 lg:py-4'>
            <span className='cursor-pointer'><img className='h-8 md:h-10 lg:-h-12 mt-2' src={ncsclogo} alt='NCSC Logo'/></span>
            
            <ul className={`text-txt lg:text-lg lg:text-xl flex flex-row space-x-8 font-semibold ${state ? "#navbar active" : "#navbar"}`} id='navbar'>
                <li></li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink>Events</NavLink>
                </li>
                <li>
                    <NavLink>Council</NavLink>
                </li>
                <li>
                    <NavLink>Office Hours</NavLink>
                </li>
                <li>
                    <NavLink>Contact</NavLink>
                </li>
                
            </ul>
            <div id='mobile' onClick={handleButtonClick}>
                    <i id='bar' className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </div>
    );
}

export default NavBar;