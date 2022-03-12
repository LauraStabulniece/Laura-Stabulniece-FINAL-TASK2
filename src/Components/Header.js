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
              <p className="text-white" style={{ fontSize: "30px" }}>J e k a t e r i n a</p>
              <p className="text-white" style={{ fontSize: "45px" }}>Matvejeva</p>
              <img src="/images/header.png" alt="logo" className="img-fluid rounded-circle" />
              <ul className="justify-content-end list-unstyled" style={{ marginTop: "20px" }}>
                <SocialIcons />
              </ul>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white text-decoration-underline" to="/">H o m e</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white text-decoration-underline" to="/portfolio">P o r t f o l i o</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" style={{ fontSize: "20px" }} to="/portfolio/more%20MY%20Drawings">ᐟ d r a w i n g s</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" style={{ fontSize: "20px" }} to="/portfolio/more%20MY%20Tattoos%20art">ᐟ t a t t o o s</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" style={{ fontSize: "20px" }} to="/portfolio/more%20MY%20Paintings">ᐟ p a i n t i n g s</Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" style={{ fontSize: "20px" }} to="/portfolio/more%20MY%20Paintings/paintings">ᐟ ᐟ m o r e ~ p a i n t i n g s</Link>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link text-white text-decoration-underline" to="/chat">C h a t</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white text-decoration-underline" to="/register">R e g i s t e r</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white text-decoration-underline" to="/aboutme">A b o u t ~ m e</Link>
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