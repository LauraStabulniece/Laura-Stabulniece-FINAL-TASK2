import { Link } from "react-router-dom"
import { useState } from "react"
import getPortfolioCategories from "../Data/getPortfolioCategories"

function PortfolioCategories() {
    const categories = getPortfolioCategories()
    const [startList, setStartList] = useState(0)

    const endList = startList + 3
    
    const changePageOne = () => {
        let nextSelected = startList - 3
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(0)
    }
    const changePageTwo = () => {
        let nextSelected = startList + 3
        if (nextSelected > 3) {
            nextSelected = 3
        }
        setStartList(3)
    }

    const categoriesList = categories.slice(startList, endList).map((category, index) => {

        return (
                <div key={index}>
                    <div className="row d-flex mx-auto">
                        <img src={category.image1} className="img-fluid rounded-circle m-3" style={{ width: 400 }} alt="..." />
                        <img src={category.image2} className="img-fluid rounded-circle m-3" style={{ width: 400 }} alt="..." />
                        <img src={category.image3} className="img-fluid rounded-circle m-3" style={{ width: 400 }} alt="..." />
                    </div>
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
        )
    })

    return (
        <div>
            <div>
            {categoriesList}
            </div>
            <div className="btn-group float-end" role="group" aria-label="Basic outlined example">
                <button onClick={() => changePageOne(startList)} type="button" className="btn btn-outline-secondary">1</button>
                <button onClick={() => changePageTwo(startList)} type="button" className="btn btn-outline-secondary">2</button>
            </div>
        </div>
    )
}

export default PortfolioCategories