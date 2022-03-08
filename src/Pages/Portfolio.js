import { Link } from "react-router-dom"
import CarouselPortfolio from "../Components/CarouselPortfolio"
import Categories from "../Components/Categories"

function Portfolio() {
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
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>P O R T F O L I O</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row bg-light position-relative overflow-hidden m-1">
                    <div className="col-md-5 p-lg-5 mx-auto my-1">
                        <CarouselPortfolio />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div style={{marginBottom: "100px" }}>
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Portfolio
