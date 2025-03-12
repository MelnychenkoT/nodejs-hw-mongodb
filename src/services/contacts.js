import { ContactsCollection } from '../models/contactModel.js';

const getAllContacts = async () => {
    return ContactsCollection.find();
  };
  
  const getContactById = async (contactId) => {
    return ContactsCollection.findById(contactId);
  };
  
  const createContact = async (contactData) => {
    return ContactsCollection.create(contactData);
  };
  
  const updateContactById = async (contactId, updateData) => {
    return ContactsCollection.findOneAndUpdate({ _id: contactId }, updateData, {
      new: true,
    });
  };
  
  const deleteContactById = async (contactId) => {
    return ContactsCollection.findByIdAndDelete(contactId);
  };
  
  export default {
    getAllContacts,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById,
  };