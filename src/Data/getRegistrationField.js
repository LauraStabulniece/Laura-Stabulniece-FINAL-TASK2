function getRegistrationField(props) {
    const { item, index } = props

    return (
        
    )
}

export default getRegistrationField


function CategoriesRow(props) {
    const { item, deleteItem, index } = props
  
    return (
      <>
          <th scope="row">{item.id}</th>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <button className="btn btn-outline-dark">Edit</button>
          </td>
          <td>
            <button className="btn btn-outline-dark" onClick={() => deleteItem(index)}>Delete</button>
          </td>
      </>
    )
  }
  
  export default CategoriesRow
  