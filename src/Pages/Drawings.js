import { Link } from "react-router-dom"

function Drawings() {
    return (
            <div>
                <div className="row">
                    <div className="col-sm-12 my-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item nav-link">
                                    <Link className="link-secondary text-decoration-none" to="/"><small>home</small></Link>
                                </li>
                                <Link className="breadcrumb-item nav-link text-success" to="/portfolio"><small>portfolio</small></Link>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>D R A W I N G S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
                
  
        )
    }
    

export default Drawings