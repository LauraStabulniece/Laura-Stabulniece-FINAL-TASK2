import getMoreDrawingsArticles from "../Data/getMoreDrawingsArticles"

function MoreDrawingsArticle() {

    const categories = getMoreDrawingsArticles()

    const categoriesItems = categories.map((category, index) => {
        
        return (
            <div key={index}>
                <div style={{ fontSize: "30px" }}>“ {category.text} ”</div>
                <div style={{ color: "rgba(241, 68, 140, 0.685)", fontSize: "20px", paddingBottom: "50px" }}>-{category.name}</div>
            </div>
        )
    })
    return (
        <div className="m-5 align-middle text-center" style={{ paddingTop: "30px" }}>
            {categoriesItems}
        </div>
    )
}

export default MoreDrawingsArticle