import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing"
import Portfolio from "../Pages/Portfolio"
import Chat from "../Pages/Chat"
import Register from "../Pages/Register"
import AboutMe from "../Pages/AboutMe"
import Drawings from "../Pages/Drawings";
import Tattoo from "../Pages/Tattoo";
import Painting from "../Pages/Painting";
import Paintings from "../Pages/Paintings";


function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/drawings" element={<Drawings />} />
                <Route path="/tattoo" element={<Tattoo />} />
                <Route path="/painting" element={<Painting />} />
                <Route path="/paintings" element={<Paintings />} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/aboutme" element={<AboutMe/>} />
            </Routes>
        </div>
    )
}

export default Content