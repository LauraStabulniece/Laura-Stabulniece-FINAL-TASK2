import { Link } from "react-router-dom"
import getLandingCategories from "../API/getLandingCategories"

function LandingCategories() {
    const categories = getLandingCategories()

    const categoriesList = categories.map((category, index) => {

        return (
            <div>
                <div key={index}>
                   <td></td>
                   <td></td>
                   <td></td>

                   <td></td>
                   ))
return (
                    <div className="row mb-2">
                        <div className="col-md-7">
                            <div className="card border-0 flex-md-row mb-4 h-md-250">
                                <div className="card-body d-flex flex-column align-items-start" id="borders">
                                    <strong className="d-inline-block mb-2" style={{ color: "purple", fontSize: "18px" }}>{category.subtitle}</strong>
                                    <div className="mb-0">
                                        <Link className="link-success" to={`/portfolio/${category.navigation}`} style={{ fontSize: "20px" }}></Link>
                                        <h3 className="text-dark text-decoration-underline">{category.name}</h3>
                                    </div>
                                    <div>
                                        <p className="card-text mb-auto" style={{ fontSize: "30px", textAlign: "left" }}>{category.description}</p>
                                        <p className="mb-1 text-muted" style={{ fontSize: "18px", textAlign: "right" }}>{category.text}</p>
                                    </div>
                                </div>
                                <img src={category.image} className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="landing" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {categoriesList}
        </div>
    )
}

export default LandingCategories