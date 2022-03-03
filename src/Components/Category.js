import { Link, useParams } from "react-router-dom"
import getCategoryByIndex from "../API/getCategoryByIndex"

function Category() {
    const { index } = useParams()
    const category = getCategoryByIndex(index)

    return (

        <div>
            <div className="card border-0 d-flex">
                <img src={category.image1} alt="" />
                <img src={category.image2} alt="" />
                <img src={category.image3} alt="" />
                <div className="card-body">
                    <Link to="/">Back</Link>
                    <h5 className="card-title">{category.title}</h5>
                    <p className="card-text">{category.description}</p>
                    <p>{category.text}</p>
                    <p className="card-text">{category.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Category