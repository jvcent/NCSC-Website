import "./Home.css";
import { useNavigate } from "react-router-dom";
import sky from "./assets/sky.png";
import park from "./assets/park.png"

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/about")
    }

    return (
        <div className="h-screen w-screen absolute bg-cover bg-center z-0" style={{ backgroundImage: `url(${sky})` }}>
            <div className="h-full w-full bg-cover bg-center z-10 flex flex-col items-center " style={{ backgroundImage: `url(${park})` }}>
                <div className="text-txt flex flex-col items-center mt-72">
                    <h1 className="font-semibold" id="heading">Welcome to the New College Student Council Website</h1>
                    <span className="w-3/5 text-center" id="description">Discover your gateway to an exciting and inclusive community at the University of Toronto. Get to know your student representatives and stay updated on the latest events, news, and initiatives that make your college experience unforgettable.</span>
                    <button 
                    className="explore tracking-wider text-[10px] md:text-base lg:text-md xl:text-lg mt-8 px-6 xl:px-8 py-2 md:py-3"
                    onClick={handleButtonClick}>EXPLORE</button>
                </div>
            </div>
        </div>
    );
}

export default Home;