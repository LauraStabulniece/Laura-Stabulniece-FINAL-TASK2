import { useState } from "react"
import { addNewChatMessage } from "../Data/chatMessages"
import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

function CreateNewChatMessage(props) {
  const { loadMessages } = props
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")
  const [messageCreating, setMessageCreating] = useState(false)

  const addNewMessage = async () => {
    setMessageCreating(true)
    await addNewChatMessage(username, message)
    setMessageCreating(false)
    await loadMessages()
    setMessage("")
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="row p-3">
        <div className="col-md-4 py-2">
          <label className="form-label">username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder= "SunnyDay"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>
      <div className="row px-3">
        <div className="col-md-8 py-2">
          <div className="form-outline mb-4">
            <label className="form-label">message:</label>
            <textarea
              className="form-control"
              id="message"
              placeholder= "how are you? keep your face to the sunshine"
              rows="3"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-end">
        <Icon 
        type="submit"
        className="text-success btn-block chat-button"
        style={{fontSize: "100px"}}
        disabled={messageCreating}
        onClick={addNewMessage}
        icon={sendCircle}
         />
        </div>
      </div>
    </form>
  )
}

export default CreateNewChatMessage