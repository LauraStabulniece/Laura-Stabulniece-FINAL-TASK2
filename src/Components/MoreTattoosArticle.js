import getMoreTattooArticles from "../Data/getMoreTattooArticles"

function MoreTattoosArticle() {

    const categories = getMoreTattooArticles()

    const categoriesItems = categories.map((category, index) => {

        return (
                <div key={index}>
                    <div className="card-body m-5 align-middle text-center" style={{ backgroundColor: "white" }}>
                        <div className="card-text" style={{ fontSize: "30px" }}>“ {category.text} ”</div>
                        <div className="text-muted" style={{ fontSize: "15px" }}>- {category.name}</div>
                    </div>
                </div>
        )
    })
    return (
        <div>
            <div>
                {categoriesItems}
            </div>
        </div>
    )
}

export default MoreTattoosArticle