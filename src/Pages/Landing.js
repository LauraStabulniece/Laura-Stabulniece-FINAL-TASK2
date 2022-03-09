import { Link } from "react-router-dom"
import LandingCategories from "../Components/LandingCategories"

function Landing() {
    return (
        <div>
            <div className="container" style={{marginBottom: "100px"}}>
                <div className="jumbotron p-3 p-md-5 text-white bg-dark">
                    <div className="col-md-6 px-0">
                        <LandingCategories />
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-7">
                        <div className="card border-0 flex-md-row mb-4 h-md-250">
                            <div className="card-body d-flex flex-column align-items-start" id="borders">
                                <strong className="d-inline-block mb-2" style={{ color: "purple", fontSize:"18px"}}>p o r t f o l i o</strong>
                                <div className="mb-0">
                                    <Link className="link-success" to="/portfolio" style={{fontSize:"20px"}}>check out</Link>
                                    <h3 className="text-dark text-decoration-underline">MY Drawings</h3>
                                </div>
                                <div>
                                    <p className="card-text mb-auto" style={{fontSize: "30px", textAlign: "left"}}>“ It is not important for the public to know whether I am joking or whether I am serious, just as it is not necessary for me to know it myself. ”</p>
                                    <p className="mb-1 text-muted" style={{ fontSize: "18px", textAlign: "right" }}>Salvador Dali</p>
                                </div>
                            </div>
                            <img src="/images/landing.png" className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="landing"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-0 flex-md-row mb-4 h-md-250">
                            <div className="card-body d-flex flex-column align-items-end" style={{paddingRight: "80px"}}>
                                <strong className="d-inline-block mb-2" style={{color: "purple", fontSize:"18px"}}>p o r t f o l i o</strong>
                                <div className="mb-0" style={{textAlign: "right"}}>
                                    <Link className="link-success" to="/portfolio" style={{fontSize:"20px"}}>check out</Link>
                                    <h2 className="text-dark text-decoration-underline">MY Tattoo art</h2>
                                </div>
                                <div>
                                    <p className="card-text mb-auto" style={{ fontSize: "25px"}}>“ Everything you can imagine is real.”</p>
                                    <p className="mb-1 text-muted" style={{ fontSize: "16px", textAlign: "right"}}>Pablo Picasso</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card flex-md-row mb-4 h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <strong className="d-inline-block mb-2" style={{ color: "purple", fontSize:"18px" }}>p o r t f o l i o</strong>
                                    <div className="mb-0">
                                        <Link className="link-success" to="/portfolio" style={{fontSize:"20px"}}>check out</Link>

                                        <h3 className="text-dark text-decoration-underline"> MY Paintings</h3>
                                    </div>
                                    <div>
                                        <p className="card-text mb-auto" style={{fontSize: "18px"}}>“ We live in a rainbow of chaos. ”</p>
                                        <p className="text-muted mb-1" style={{ fontSize: "13px", textAlign: "right" }}>Paul Cezanne</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default Landing





























//                 <div className="row mb-2">
//                     <div className="col-md-7">
//                         <div className="card border-0 flex-md-row mb-4 h-md-250">
//                             <div className="card-body d-flex flex-column align-items-start" id="borders">
//                                 <strong className="d-inline-block mb-2" style={{ color: "purple", fontSize:"18px"}}>p o r t f o l i o</strong>
//                                 <div className="mb-0">
//                                     <Link className="link-success" to="/portfolio" style={{fontSize:"20px"}}>check out</Link>
//                                     <h3 className="text-dark text-decoration-underline">MY Drawings</h3>
//                                 </div>
//                                 <div>
//                                     <p className="card-text mb-auto" style={{fontSize: "30px", textAlign: "left"}}>“ It is not important for the public to know whether I am joking or whether I am serious, just as it is not necessary for me to know it myself. ”</p>
//                                     <p className="mb-1 text-muted" style={{ fontSize: "18px", textAlign: "right" }}>Salvador Dali</p>
//                                 </div>
//                             </div>
//                             <img src="/images/landing.png" className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="landing"/>
//                         </div>
//                     </div>
//                     <div className="col-md-5">
//                         <div className="card border-0 flex-md-row mb-4 h-md-250">
//                             <div className="card-body d-flex flex-column align-items-end" style={{paddingRight: "80px"}}>
//                                 <strong className="d-inline-block mb-2" style={{color: "purple", fontSize:"18px"}}>p o r t f o l i o</strong>
//                                 <div className="mb-0" style={{textAlign: "right"}}>
//                                     <Link className="link-success" to="/portfolio" style={{fontSize:"20px"}}>check out</Link>
//                                     <h2 className="text-dark text-decoration-underline">MY Tattoo art</h2>
//                                 </div>
//                                 <div>
//                                     <p className="card-text mb-auto" style={{ fontSize: "25px"}}>“ Everything you can imagine is real.”</p>
//                                     <p className="mb-1 text-muted" style={{ fontSize: "16px", textAlign: "right"}}>Pablo Picasso</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-7">
//                             <div className="card flex-md-row mb-4 h-md-250">
//                                 <div className="card-body d-flex flex-column align-items-start">
//                                     <strong className="d-inline-block mb-2" style={{ color: "purple", fontSize:"18px" }}>p o r t f o l i o</strong>
//                                     <div className="mb-0">
//                                         <Link className="link-success" to="/portfolio" style={{fontSize:"20px"}}>check out</Link>

//                                         <h3 className="text-dark text-decoration-underline"> MY Paintings</h3>
//                                     </div>
//                                     <div>
//                                         <p className="card-text mb-auto" style={{fontSize: "18px"}}>“ We live in a rainbow of chaos. ”</p>
//                                         <p className="text-muted mb-1" style={{ fontSize: "13px", textAlign: "right" }}>Paul Cezanne</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>





//     )
// }

// export default Landing