import { Link } from "react-router-dom"
import FancyBoxFlower from "../Components/FancyBoxFlower"

function Paintings() {
    return (
        <div>
            <div container>
                <div className="row">
                    <div className="col-sm-12 my-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item nav-link">
                                    <Link className="link-secondary text-decoration-none" to="/"><small>home</small></Link>
                                </li>
                                <Link className="breadcrumb-item nav-link text-success" to="/portfolio"><small>portfolio</small></Link>
                                <Link className="breadcrumb-item nav-link text-success" to="/painting"><small>painting</small></Link>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>M O R E ~ P A I N T I N G S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <FancyBoxFlower />
                    </div>
                    <div className="col-md-6">
                        3r23r23r
                    </div>
                </div>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        23432424234
                    </div>
                    <div className="col-md-6">
                        3r23r23r
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Paintings