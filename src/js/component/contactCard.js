import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

export default function ContactCard() {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(store.contacts);
  }, [ store.contacts]);

  return (
    <div>
      <h1>All Contacts</h1>
      {contacts?.map((contact, index) => (
        <div className="contactCard d-flex" key={index}>
          <img src={contact.img}/>
          <h3>{contact.name}</h3>
          <h3>{contact.email}</h3>
          <h3>{contact.number}</h3>
          <button onClick={(e)=>actions.deleteContacts(e.target.value)}>DeleteContact</button>
        </div>
      ))}
    </div>
  );
}
