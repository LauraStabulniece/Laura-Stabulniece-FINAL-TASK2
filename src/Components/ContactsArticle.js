import getContactsArticles from "../Data/getContactsArticles"

function ContactsArticle() {

  const categories = getContactsArticles()

  const categoriesItems = categories.map((category, index) => {

    return (
      <div key={index}>
            <h4 style={{backgroundColor: "black", color: "white",  paddingLeft: "40px", paddingTop: "20px", paddingBottom: "20px"}}>{category.title} :</h4>
            <p style={{paddingLeft: "40px"}}>{category.description}</p>
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