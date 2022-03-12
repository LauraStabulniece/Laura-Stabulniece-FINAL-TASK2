import { Link } from "react-router-dom"
import ContactsInfo from "../Components/ContactsInfo"
import Tabs from "../Components/Tabs"

function AboutMe() {
    return (
        <div>
            <div container="true">
                <div className="row">
                    <div className="col-sm-12 my-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item nav-link">
                                    <Link className="link-secondary text-decoration-none" to="/"><small>home</small></Link>
                                </li>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>A B O U T ~ M E</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div>
                    <Tabs />
                </div>
            </div>
            <div>
                <ContactsInfo />
            </div>
        </div>
    )
}

export default AboutMe
