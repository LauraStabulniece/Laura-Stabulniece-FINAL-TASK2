import { Link } from "react-router-dom"
import ContactsArticle from "../Components/ContactsArticle"
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
                <div className="col-5">
                    <h1>TE IR JĀBŪT KARTEI</h1>
                </div>
                <div className="col-7">
                    <ContactsArticle />
                <h4 style={{backgroundColor: "black", paddingTop: "20px", paddingBottom: "20px"}}>
                    <SocialIcons />
                </h4>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
