import getContactsArticles from "../Data/getContactsArticles"

function ContactsArticle() {

  const categories = getContactsArticles()

  const categoriesItems = categories.map((category, index) => {

    return (
      <div key={index}>
            <h5>{category.title}</h5>
            <p>{category.description}</p>
          </div>
    )
  })
  return (
    <div>
      {categoriesItems}
    </div>
  )
}

export default ContactsArticle