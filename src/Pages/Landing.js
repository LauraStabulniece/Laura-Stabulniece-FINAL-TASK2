import { Link } from "react-router-dom"

function Landing() {
    return (
        <div>
            <div className="container">
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">“ I don't paint dreams or nightmares, I paint my own reality. ”</h1>
                        <h3 className="my-3">~ Frida Kahlo</h3>
                        <p className="lead my-3">KEIT: "It is a wonderful quote. Well, and it's all about me, too." ~</p>
                        <p className="lead mb-0"><Link to="/portfolio" className="text-white font-weight-bold">Take a look</Link></p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2" style={{ color: "purple" }}>portfolio</strong>
                                <div className="mb-0">
                                    <Link className="link-success" to="/portfolio">check out</Link>
                                    <h3 className="text-dark text-decoration-underline">MY Drawings</h3>
                                </div>
                                <div>
                                    <p className="card-text mb-auto" style={{textAlign: "left"}}>“ It is not important for the public to know whether I am joking or whether I am serious, just as it is not necessary for me to know it myself. ”</p>
                                    <p className="mb-1 text-muted" style={{ fontSize: "14px", textAlign: "right" }}>Salvador Dali</p>
                                </div>
                            </div>
                            <img src="/images/landing.png" className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="logo"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2" style={{ color: "purple" }}>portfolio</strong>
                                <div className="mb-0">
                                    <Link className="link-success" to="/portfolio">check out</Link>
                                    <h3 className="text-dark text-decoration-underline">MY Tattoo art</h3>
                                </div>
                                <div>
                                    <p className="card-text mb-auto">“ Everything you can imagine is real.”</p>
                                    <p className="mb-1 text-muted" style={{ fontSize: "14px", textAlign: "right" }}>Pablo Picasso</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <strong className="d-inline-block mb-2" style={{ color: "purple" }}>portfolio</strong>
                                    <div className="mb-0">
                                        <Link className="link-success" to="/portfolio">check out</Link>

                                        <h3 className="text-dark text-decoration-underline"> MY Paintings</h3>
                                    </div>
                                    <div>
                                        <p className="card-text mb-auto">“ We live in a rainbow of chaos. ”</p>
                                        <p className="text-muted mb-1" style={{ fontSize: "14px", textAlign: "right" }}>Paul Cezanne</p>
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