import { Link } from "react-router-dom"
import CarouselTattoo from "../Components/CarouselTattoo"
import MoreTattoosArticle from "../Components/MoreTattoosArticle"
import TattooArticles from "../Components/TattooArticles"

function Tattoos() {
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
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>T A T T O  O S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-md-stretch m-1">
                    <div className="col-md-7">
                        <CarouselTattoo />
                        <h2 className="align-middle text-center p-5" style={{ color: "green", fontSize: "70px" }}>some works</h2>
                    </div>
                    <div className="col-md-5 rounded-3" style={{ backgroundColor: "rgba(63, 176, 184, 0.253)" }}>
                        <div className="card-body">
                            <p className="card-text text-center" style={{ paddingTop: "50px", fontSize: "25px" }}><strong>“Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad,
                                whether they love it or hate it. While they are deciding, make even more art</strong></p>
                            <p style={{ paddingLeft: "20px" }}><small className="text-muted">-Andy Warhol</small></p>
                            <p className="align-middle text-center" style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "50px" }}>remember that</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-md-stretch" style={{ marginBottom: "100px" }}>
                    <div className="col-md-7 rounded-3" style={{ backgroundColor: "rgba(240, 138, 181, 0.424)", padding: "20px" }}>
                        <MoreTattoosArticle />
                    </div>
                    <div className="col-md-5 ">
                        <div className="card-body m-3">
                            <TattooArticles />
                        </div>
                        <p className="align-middle text-center" style={{ color: "green", fontSize: "90px", paddingTop: "50px" }}>for you</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tattoos