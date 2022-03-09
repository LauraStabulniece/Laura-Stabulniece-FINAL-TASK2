import { Link } from "react-router-dom"
import FancyBoxDifferent from "../Components/FancyBoxDifferent"
import FancyBoxFlower from "../Components/FancyBoxFlower"
import FancyBoxPortraits from "../Components/FancyBoxPortraits"

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
                                <Link className="breadcrumb-item nav-link text-success" to="/portfolio/more%20MY%20Paintings"><small>painting</small></Link>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>M O R E ~ P A I N T I N G S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-md-stretch" style={{backgroundColor: "black", marginBottom: "100px", padding: "20px"}}>
                    <div className="col-md-4">
                            <FancyBoxFlower />
                            <p style={{ marginTop: "170px", padding: "10px", textAlign: "center"}}><strong style={{color: "white", fontSize: "100px"}}>ART NEVER SLEEPS</strong></p>
                        

                    </div>
                    <div className="col-md-4">
                            <FancyBoxDifferent />
                        <p style={{ backgroundColor: "white", marginTop: "100px", padding: "10px", textAlign: "center"}}><strong style={{fontSize: "60px"}}>“ art is about paying attention ”</strong>
                        <p className="text-muted mb-1">-Laurie Anderson</p>

                        </p>
                    </div>
                    <div className="col-md-4">
                            <FancyBoxPortraits />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paintings