import { Link } from "react-router-dom"
import getCategories from "../API/getCategories"

function Categories() {
    const categories = getCategories()

    const categoriesList = categories.map((category, index) => {

        return (
            <div>
                <div key={index}>
                    <th scope="row d-flex mx-auto">
                        <img src={category.image1} className="img-fluid rounded-circle m-3" style={{ width: 400 }} alt="..." />
                        <img src={category.image2} className="img-fluid rounded-circle m-3" style={{ width: 400 }} alt="..." />
                        <img src={category.image3} className="img-fluid rounded-circle m-3" style={{ width: 400 }} alt="..." />
                    </th>
                    <div className="col" style={{ marginTop: "50px" }}>
                        <div className="card border-0">
                            <h2 className="card-text text-center m-3">
                                <Link className="link-dark" to={`/portfolio/${category.title}`}>
                                    <strong>{category.title}</strong>
                                </Link></h2>
                            <h5 style={{ textAlign: "right" }}>{category.description}</h5>
                            <div style={{ textAlign: "center" }}>
                                <p style={{ marginTop: "50px", fontSize: "18px" }}>“{category.text}”</p>
                                <p ><small className="text-muted">-{category.name}</small></p>
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

export default Categories