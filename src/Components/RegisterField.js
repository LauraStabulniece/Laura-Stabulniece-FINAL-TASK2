import './RegisterField.css'

const formInputs = [
  { id: 'name',
   type: 'text',
    label: 'your name',
     placeholder: 'Sunny Day',
     },
  {
    id: 'tel',
    type: 'tel',
    label: 'phone number',
    placeholder: '+123 4 567890',
  },
  {
    id: 'email',
    type: 'email',
    label: 'email address',
    placeholder: 'hey@haveaniceday.com',
  },

]

const RegisterField = () => (
  <form className="form" style={{ marginBottom: "100px" }}>
    <h1 className="form-h2" style={{ backgroundColor: "white", color: "green" }}>R E G I S T E R</h1>

    <img src="images/register.png" className="img-fluid rounded-circle" alt="registerImage" />

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}



    <button className="btn btn-info form-submit" style={{ color: "white" }}>register</button>
  </form>
)


export default RegisterField