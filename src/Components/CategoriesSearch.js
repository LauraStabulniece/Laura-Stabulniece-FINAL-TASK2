import { useState } from "react"
import getCategories from "../API/getCategories"

function CategoriesSearch() {
    const [items] = useState(getCategories())
    const [searchTerm, setSearchTerm] = useState("")

    const filterList = items
        .filter((val) => {
            if (searchTerm === "") {
                return false
            } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return val
            }
            return false
        })
        .map((val, key) => {
            return (
                <table key={key} className="table border p-5" style={{ color: "pink" }}>
                    <tbody>
                        <tr>
                            <th scope="row">{val.id}</th>
                            <td>{val.title}</td>
                        </tr>
                    </tbody>
                </table>
            )
        })
    return (
        <div className="row">
            <div className="col-md-12 d-flex justify-content-end">
                <span className="p-2 mx-2">S e a r ch</span>
                <input type="text" value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }}></input>
            </div>
            <div className="row">
                <div className="col-md-2 mx-auto">{filterList}</div>
            </div>
        </div>
    )
}

export default CategoriesSearch
