import getMoreDrawingsArticles from "../Data/getMoreDrawingsArticles"

function MoreDrawingsArticle() {

    const categories = getMoreDrawingsArticles()

    const categoriesItems = categories.map((category, index) => {
        return (
            <div>
                <div key={index}>
                        <p style={{ fontSize: "30px" }}>“ {category.text} ”</p>
                        <p style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px" }}>-{category.name}</p>
                    </div>
                </div>
        )
    })
    return (
        <div>
             <div className="m-5 align-middle text-center" style={{ paddingTop: "30px" }}>
                {categoriesItems}
            </div>
        </div>
    )
}

export default MoreDrawingsArticle