import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTiktok, faFacebook, faInstagram, } from "@fortawesome/free-brands-svg-icons"

function SocialIcons() {
    return (
        <div>
            <div className="d-flex" style={{ paddingLeft: "40px" }}>
                <a href="https://www.tiktok.com/@keittattoo" className="navbar-brand d-flex align-items-center">
                    <FontAwesomeIcon icon={faTiktok} style={{ color: "white", width: "25px", height: "25px" }} />
                </a>
                <a href="https://www.facebook.com/keittattoo" className="navbar-brand d-flex align-items-center">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "white", width: "25px", height: "25px" }} />
                </a>
                <a href="https://www.instagram.com/keittattoo/" className="navbar-brand d-flex align-items-center">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "white", width: "25px", height: "25px" }} />
                </a>
            </div>
        </div>
    )
}

export default SocialIcons