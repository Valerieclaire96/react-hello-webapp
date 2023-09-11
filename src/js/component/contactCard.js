import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import UpdateContact from "./updateContact";

export default function ContactCard(props) {
  const { store, actions } = useContext(Context);
  const editMode = store.editMode;

  return (
    <div>
      {editMode === false ? (
        <div className="contactCard d-flex justify-content-around w-100">
          {/* <img src={props.img} /> */}
          <h3>{props.name}</h3>
          <h3>{props.email}</h3>
          <h3>{props.number}</h3>
          <div className="w-50">
            <button
              className="btn btn-danger mx-2"
              onClick={(e) => actions.deleteContacts(props.contact)}
            >
              Delete Contact
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => actions.setEditMode(true)}
            >
              Update Contact
            </button>
          </div>
        </div>
      ) : (
        <UpdateContact
          name={props.name}
          email={props.email}
          number={props.number}
          index={props.index}
          editMode={editMode}
        />
      )}
    </div>
  );
}
