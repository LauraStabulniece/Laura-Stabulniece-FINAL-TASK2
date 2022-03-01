import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing"
import Portfolio from "../Pages/Portfolio"
import Chat from "../Pages/Chat"
import Register from "../Pages/Register"
import AboutMe from "../Pages/AboutMe"


function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/aboutme" element={<AboutMe/>} />
            </Routes>
        </div>
    )
}

export default Content