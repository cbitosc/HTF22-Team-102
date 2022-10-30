import { useEffect, useState } from "react"
import React from "react"

// components
import ContactDetails from "../components/ContactDetails"
import ContactForm from "../components/ContactForm"

const Home = () => {
  const [contacts, setContacts] = useState(null)

  useEffect(() => {

    const fetchContacts = async () => {
      const response = await fetch("http://localhost:4000/")
      const json = await response.json()

      if (response.ok) {
        setContacts(json)
      }
    }

    fetchContacts()
  }, [])

  return (
    <div className="home">
      <div className="contacts">
        {contacts && contacts.map(contact => (
          <ContactDetails contact={contact} key={contact._id} />
        ))}
      </div>
      <ContactForm />
    </div>
  )
}

export default Home