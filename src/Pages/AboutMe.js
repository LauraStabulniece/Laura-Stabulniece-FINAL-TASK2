import { Link } from "react-router-dom"
import ContactsArticle from "../Components/ContactsArticle"
import MapClass from "../Components/MapClass"
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
            <div className="row" style={{marginTop: "100px", marginBottom: "100px"}}>
                <div className="col-5" style={{position: "relative", marginBottom: "6px"}}>
                  <MapClass />  
                </div>
                <div className="col-7">
                    <ContactsArticle />
                <h4 style={{backgroundColor: "rgba(46, 13, 83, 0.747)", paddingTop: "18px", paddingBottom: "18px"}}>
                    <SocialIcons />
                </h4>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
