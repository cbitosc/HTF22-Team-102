import { useState } from 'react'
import React from 'react'
const ContactForm = () => {
  const [title, setTitle] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const contact = {title, number, address, emailAddress }
    
    const response = await fetch('/', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setNumber('')
      setAddress('')
      setEmailAddress('')
      console.log('new contact added:', json)
    }
      window.location.reload(false);
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Contact</h3>

      <label>Name:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Phone Number:</label>
      <input 
        type="text" 
        onChange={(e) => setNumber(e.target.value)} 
        value={number}
      />

      <label>Address:</label>
      <input 
        type="text" 
        onChange={(e) => setAddress(e.target.value)} 
        value={address} 
      />
      
      <label>Email Address:</label>
      <input 
        type="text" 
        onChange={(e) => setEmailAddress(e.target.value)} 
        value={emailAddress} 
      />

      <button>Add Contact</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ContactForm