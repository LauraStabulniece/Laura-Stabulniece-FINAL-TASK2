import { Link } from "react-router-dom"
import ContactsArticle from "../Components/ContactsArticle"
import Map from "../Components/Map"
import SocialIcons from "../Components/SocialIcons"
import TabsArticles from "../Components/TabArticles"

function AboutMe() {
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
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>A B O U T ~ M E</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div>
                    <TabsArticles />
                </div>
            </div>
            <div className="row" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <div className="col" style={{position: "relative", marginBottom: "6px" }}>
                    <Map />
                </div>
                <div className="col" style={{ paddingLeft: "50px" }}>
                    <ContactsArticle />
                    <h4 style={{ backgroundColor: "rgba(46, 13, 83, 0.747)", paddingTop: "18px", paddingBottom: "18px", paddingLeft: "390px" }}>
                        <SocialIcons />
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
