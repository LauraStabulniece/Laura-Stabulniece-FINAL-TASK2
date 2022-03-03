import { Link } from "react-router-dom"
import Carousel from "../Components/Carousel"
import Categories from "../Components/Categories"

function Portfolio() {
    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-1 m-md-1 bg-light">
                <div className="row">
                    <div className="col-sm-12 my-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item nav-link">
                                    <Link className="link-secondary text-decoration-none" to="/"><small>home</small></Link>
                                </li>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>P O R T F O L I O</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="col-md-5 p-lg-5 mx-auto my-1">
                    <Carousel />
                </div>
            </div>
            <div style={{ marginBottom: "100px" }}>
                <Categories />
            </div>
        </div>
    )
}
export default Portfolio
