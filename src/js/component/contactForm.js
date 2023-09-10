import React, {useState, useEffect, useContext} from 'react'
import { Context } from "../store/appContext";

export default function ContactForm() {
const { store, actions } = useContext(Context);
const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [number, setNumber] = useState("")
const [contact, setContact] = useState("")

const handleSumbit = (e)=>{
  e.preventDefault();
  actions.addContacts({name: name, number: number, email:email})
  console.log(store.contacts)
}

  return (
    <form onSubmit={handleSumbit}>
        <h1>Create a Contact</h1>
        <h3>Name</h3>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
        <h3>Email</h3>
        <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Number</h3>
        <input type='text' onChange={(e)=>setNumber(e.target.value)}/>
        <button type="submit">Create Contact</button>
    </form>
  )
}
