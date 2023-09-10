import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export default function ContactForm() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    actions.addContacts({ name: name, number: number, email: email });
    console.log(store.contacts);
  };

  return (
    <div className="bg-light w-50 mx-auto p-2 rounded">
      <h3>Create a Contact : </h3>
      <form
        onSubmit={handleSumbit}
        className="mx-auto justify-content-around"
      >
        <div className="d-flex">
        <div>
          <label>Name:</label>
          <br />
          <input
            className="h-25 w-50"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            className="h-25 w-50"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Number:</label>
          <br />
          <input
            className="h-25 w-50"
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Create Contact
        </button>
      </form>
    </div>
  );
}
