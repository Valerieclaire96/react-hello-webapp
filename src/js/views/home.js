import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import ContactForm from "../component/contactForm";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);
  

  useEffect(() => {
    setContacts(store.contacts);
	console.log(contacts)
  }, [store.contacts]);

  return (
    <div className="text-center mt-5">
	 <ContactForm />
      <div className="contactsContainer mx-auto mt-5">
        <h1>All Contacts</h1>
        <hr/>
        {contacts?.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            number={contact.number}
            img={contact.img}
            contact={contact}
            index={index}
          />
        ))}
      </div>
    
    </div>
  );
};
