const express = require('express')
const {
  getContacts, 
  getContact, 
  createContact, 
  deleteContact, 
  updateContact
} = require('../controllers/controller')

const router = express.Router()

router.get('/', getContacts)


router.get('/:id', getContact)


router.post('/', createContact)

router.delete('/:id', deleteContact)


router.patch('/:id', updateContact)

module.exports = router
