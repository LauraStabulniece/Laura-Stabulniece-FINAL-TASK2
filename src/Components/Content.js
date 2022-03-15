import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing"
import Portfolio from "../Pages/Portfolio"
import Chat from "../Pages/Chat"
import Register from "../Pages/Register"
import AboutMe from "../Pages/AboutMe"
import Drawings from "../Pages/Drawings";
import Tattoos from "../Pages/Tattoos";
import Painting from "../Pages/Painting";
import Paintings from "../Pages/Paintings";
import Complete from "../Pages/Complete";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/more%20MY%20Drawings" element={<Drawings />} />
                <Route path="/portfolio/more%20MY%20Tattoos%20art" element={<Tattoos />} />
                <Route path="/portfolio/more%20MY%20Paintings" element={<Painting />} />
                <Route path="/portfolio/more%20MY%20Paintings/paintings" element={<Paintings />} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/thanks" element={<Complete />} />
                <Route path="/aboutme" element={<AboutMe/>} />
            </Routes>
        </div>
    )
}

export default Content