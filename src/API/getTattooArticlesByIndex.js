import getTattooArticles from "./getTattooArticles"

function getTattooArticlesByIndex(index) {
    const tattooCategories = getTattooArticles()

    return tattooCategories[index]
}

export default getTattooArticlesByIndex