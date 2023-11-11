import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Council from "./pages/Council";
import Office from "./pages/Office";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/council" element={<Council />} />
            <Route path="/office" element={<Office />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
