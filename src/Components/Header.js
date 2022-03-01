import { Link } from "react-router-dom"
import '../Components/Header.css'
import SocialIcons from "./SocialIcons"


function Header() {
  return (
    <div>
      <div className="collapse bg-secondary" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h2 className="text-white">Jekaterina</h2>
              <h2 className="text-white">Matvejeva</h2>
              <img src="/images/header.png" alt="" className="img-fluid rounded-circle m-3"></img>
              <ul className="justify-content-end list-unstyled">
                <SocialIcons />
              </ul>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <ul className="navbar-nav list-unstyled">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/chat">Chat</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/aboutme">About me</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-warning shadow-sm">
        <div className="container">

          <strong><h2 className="textColor">KeiTT TaTToo</h2></strong>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
            aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header