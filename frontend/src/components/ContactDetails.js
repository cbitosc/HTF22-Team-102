import React from "react"


const ContactDetails = ({ contact }) => {
  const handleClick = async () => {
    // const response = await fetch('https://localhost:4000/' + contact._id, {
    //   method: 'DELETE'
    // }).catch(response)
    // }
    fetch('http://localhost:4000/' + contact._id, {
      method: 'DELETE'
    }).then(response => {
      if (response.ok){
          window.location.reload(false);
      }
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).catch(err=>{
    console.log(err)})}


  return (
    <div className="contact-details">
      <h4>{contact.title}</h4>
      <p><strong>Phone Number: </strong>{contact.number}</p>
      <p><strong>Address:</strong>{contact.address}</p>
      <p><strong>Email Address:</strong>{contact.emailAddress}</p>
      <p>{contact.createdAt}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default ContactDetails