import { Link } from "react-router-dom"
import PaintingsArticle from "../Components/PaintingsArticle"

function Painting() {
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
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>P A I N T I N G S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-md-stretch m-1">
                    <div className="col-md-2 rounded-3">
                        <img src="/images/painting/1.png" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h1><Link to="/portfolio/more%20MY%20Paintings/paintings" className="link-dark m-2">explore paintings</Link></h1>
                        </div>
                    </div>
                    <div className="col-md-10 rounded-3" style={{ backgroundColor: "rgba(240, 138, 181, 0.424)" }}>
                        <div className="card-body">
                            <PaintingsArticle />
                        </div>
                    </div>
                </div>
                <div className="row align-items-md-stretch" style={{ marginTop: "20px", marginBottom: "100px" }}>
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3" style={{ backgroundColor: "rgba(63, 176, 184, 0.253)" }}>
                            <p style={{ color: "rgba(74, 189, 39, 0.815)", fontSize: "60px", paddingTop: "70px" }}>explore more</p>
                            <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "100px" }}>PAINTINGS</p>
                            <h4><Link to="/portfolio/more%20MY%20Paintings/paintings" className="link-warning">HERE</Link></h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="h-100 p-5 rounded-3" style={{ backgroundColor: "rgba(217, 245, 57, 0.411)" }}>
                            <img src="/images/painting/3.png" className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">Painting is just another way of keeping diary</p>
                                <p ><small className="text-muted">-Pablo Picasso</small></p>
                                <p className="align-middle text-center" style={{ color: "purple", fontSize: "50px" }}>I offer a</p>
                                <h2><Link to="/portfolio/more%20MY%20Paintings/paintings" className="link-success">l o o k mine</Link></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="h-100 m-1">
                            <img src="/images/painting/2.png" className="card-img-top" alt="" />
                            <div className="card-body align-middle text-center">
                                <h4 className="card-text">I like to paint FLOWERS:</h4>
                                <p>/ camellias snowdrops tulips peonies lilies magnolias roses sunflowers dandelions jasmines dasies orchids narcissus poppies daffodils /</p>
                                <h3>and imagine their smell</h3>
                                <h4><Link to="/portfolio/more%20MY%20Paintings/paintings" className="link-info">try to smell HERE</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Painting