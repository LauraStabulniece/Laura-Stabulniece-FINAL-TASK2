import { Link } from "react-router-dom"
import CarouselDrawings from "../Components/CarouselDrawings"
import DrawingArticles from "../Components/DrawingArticles"

function Drawings() {
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
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>D R A W I N G S</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row align-items-md-stretch">
                <div className="col-md-5">
                    <h2 className="align-middle text-center text-decoration-underline" style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "30px"}}>art has been defined as a vehicle for the expression or communication of emotions</h2>
                    <DrawingArticles />
                </div>
                <div className="col-md-7" style={{paddingRight: "130px", paddingLeft: "20px"}}>
                <div className="card-body m-5 align-middle text-center" style={{paddingTop: "80px"}}>
                        <p className="card-text" style={{ fontSize: "30px"}}>I shut my eyes in order to see.</p>
                        <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px" }}>-Paul Gauguin</p>
                    </div>

                    <div className="card-body m-5 align-middle text-center">
                        <p className="card-text" style={{ fontSize: "30px"}}>To learn to draw is to draw and draw and draw.</p>
                        <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px" }}>-Andrew Loomis</p>
                    </div>
                    <div className="card-body m-5 align-middle text-center">
                        <p className="card-text" style={{ fontSize: "30px"}}>Great art picks up where nature ends.</p>
                        <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px" }}>-Marc Chagall</p>
                    </div>
                   
                    <div className="card-body m-5 align-middle text-center">
                        <p className="card-text" style={{ fontSize: "30px"}}>Art evokes the mystery without which the world would not exist.</p>
                        <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px" }}>-René Magritte</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-md-stretch" style={{ marginTop: "30px", marginLeft: "20px", marginRight: "90px", marginBottom: "100px" }}>
                <div className="col-md-5" style={{ backgroundColor: "black" }}>
                    <div className="card-body" style={{ paddingTop: "70px" }}>
                        <CarouselDrawings />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card-body m-5 align-middle text-center">
                        <p className="card-text" style={{ fontSize: "30px" }}>Art is a line around your thoughts.</p>
                        <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px" }}>-Gustav Klimt</p>
                    </div>
                    <p className="align-middle text-center text-decoration-underline" style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "70px", paddingTop: "10px" }}>art is theraphy </p>
                </div>
            </div>
        </div>

    )
}
export default Drawings