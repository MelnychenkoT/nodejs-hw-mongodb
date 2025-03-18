import { ContactsCollection } from '../models/contactModel.js';

const getAllContacts = async (page, perPage, sortBy, sortOrder, filter) => {
    const { contactType, isFavourite } = filter;
  
    const query = {};
    if (contactType) query.contactType = contactType;
    if (isFavourite !== null) query.isFavourite = isFavourite;
  
    const totalItems = await ContactsCollection.countDocuments(query);
    const contacts = await ContactsCollection.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * perPage)
      .limit(perPage);
  
    return { contacts, totalItems };
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