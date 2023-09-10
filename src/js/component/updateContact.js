import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export default function UpdateContact(props) {
  const { store, actions } = useContext(Context);
  const [newEmail, setNewEmail] = useState(props.email);
  const [newName, setNewName] = useState(props.name);
  const [newNumber, setNewNumber] = useState(props.number);


  const handleSumbit = (e) => {
    e.preventDefault();
    actions.updateContact(
      { name: props.name, number: props.number, email: props.email }, 
      { name: newName, number: newNumber, email: newEmail } 
    );
    actions.setEditMode(false)
  };

  return (
    <form className="d-flex" onSubmit={handleSumbit}>
      <h1>Update a Contact</h1>
      <h3>Name</h3>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <h3>Email</h3>
      <input type="text" onChange={(e) => setNewEmail(e.target.value)} />
      <h3>Number</h3>
      <input type="text" onChange={(e) => setNewNumber(e.target.value)} />
      <button className="btn btn-primary" type="submit">Update Contact</button>
    </form>
  );
}
