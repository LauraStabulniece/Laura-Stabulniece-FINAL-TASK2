

import getDrawingArticlesByIndex from "./getDrawingArticlesByIndex"

function getDrawingArticlesByIndex(index) {
    const tattooCategories = getDrawingArticles()

    return tattooCategories[index]
}

export default getDrawingArticlesByIndex