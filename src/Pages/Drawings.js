import { Link } from "react-router-dom"
import CarouselDrawings from "../Components/CarouselDrawings"
import DrawingArticles from "../Components/DrawingArticles"
import MoreDrawingsArticle from "../Components/MoreDrawingsArticle"

function Drawings() {
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
                                <Link className="breadcrumb-item nav-link text-success" to="/portfolio"><small>portfolio</small></Link>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>D R A W I N G S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-md-stretch m-0 rounded-2" style={{ backgroundColor: "black" }}>
                    <div className="col-md">
                        <p className="align-middle text-center" style={{ paddingTop: "40px", color: "white", fontSize: "50px" }}>art has been defined as a vehicle for the expression or communication of emotions</p>
                    </div>
                </div>
                <div className="col-md" style={{ backgroundColor: "black", padding: "70px" }}>
                    <CarouselDrawings />
                </div>
                <div className="row align-items-md-stretch">
                    <div className="col-md-4" style={{ marginTop: "50px" }}>
                        <DrawingArticles />
                    </div>
                    <div className="col-md-8" style={{ paddingRight: "130px", paddingLeft: "90px" }}>
                        <MoreDrawingsArticle />
                    <p className="align-middle text-center text-decoration-underline" style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "70px", paddingTop: "10px", marginBottom: "100px"}}>art is theraphy </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawings