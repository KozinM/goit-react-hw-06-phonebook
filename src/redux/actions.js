export const addContact = (data) => {
  return {
    type: "contacts/addContact",
    payload: data,
  };
};
export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setContactsFilter = value => {
  return {
    type: "filters/setContactsFilter",
    payload: value,
  };
};