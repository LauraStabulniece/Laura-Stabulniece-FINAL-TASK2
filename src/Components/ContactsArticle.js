import getContactsArticles from "../Data/getContactsArticles"
import { InlineIcon } from '@iconify/react'

function ContactsArticle() {

  const categories = getContactsArticles()

  const categoriesItems = categories.map((category, index) => {

    return (
      <div key={index}>
            <h3 style={{backgroundColor: "rgba(46, 13, 83, 0.747)", color: "white",  paddingLeft: "40px", paddingTop: "20px", paddingBottom: "20px"}}>
              <InlineIcon icon={category.icon} /> {category.title} :</h3>
            <p style={{paddingLeft: "40px", fontSize: "25px"}}>{category.description}</p>
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