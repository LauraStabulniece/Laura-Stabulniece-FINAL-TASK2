import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import './ChatForm.css'

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
  {
    id: 'message',
    type: 'textarea',
    label: 'your message',
    placeholder: 'how are you? keep your face to the sunshine',
  },
]

const ChatForm = () => (
  <form className="form">
    <h2 className="form-h2 text-success">send me a message</h2>

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

    <Icon className="form-submit text-success" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default ChatForm
