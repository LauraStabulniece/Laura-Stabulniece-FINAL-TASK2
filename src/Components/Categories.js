import { Link } from "react-router-dom"
import { useState } from "react"
import getCategories from "../API/getCategories"

function Categories() {
    const categories = getCategories()
    const [startList, setStartList] = useState(0)

    const endList = startList + 2
    const moveLeft = () => {
        let nextSelected = startList - 2
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 2
        if (nextSelected > 2) {
            nextSelected = 22
        }
        setStartList(nextSelected)
    }
    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(2)
    }

    const categoriesList = categories.slice(startList, endList).map((category, index) => {

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

export default Categories