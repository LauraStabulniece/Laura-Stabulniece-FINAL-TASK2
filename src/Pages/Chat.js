import { Link } from "react-router-dom"
import ContactSection from "../Components/ContactSection"

function Chat() {
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
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>C H A T</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            <div className="row" style={{marginTop: "100px", marginBottom: "100px"}}>
                    <div className="col">
                        <ContactSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat