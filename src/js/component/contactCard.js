import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import UpdateContact from "./updateContact";
export default function ContactCard(props) {
  const { store, actions } = useContext(Context);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {editMode === false ? (
        <div className="contactCard d-flex">
          {/* <img src={props.img} /> */}
          <h3>{props.name}</h3>
          <h3>{props.email}</h3>
          <h3>{props.number}</h3>
          <button onClick={(e) => actions.deleteContacts(props.contact)}>
            Delete Contact
          </button>
          <button onClick={() => setEditMode(true)}>Update Contact</button>
        </div>
      ) : (
        <UpdateContact
        name={props.name}
        email={props.email}
        number={props.number}
        index={props.index} />
      )}
    </div>
  );
}
