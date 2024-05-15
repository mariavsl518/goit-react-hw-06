import React from 'react'
import { Contact } from '../Contact/Contact'
import { useSelector } from 'react-redux'
import css from './ContactList.module.css'


export const ContactList = () => {

  const contacts = useSelector((store)=> store.contacts.items)
  const filter = useSelector((store)=> store.filter.name)

  const filteredItems = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <ul className={css.contactList}>
      {filteredItems.map(({id, name, number})=>
        <li key={id} className={css.listItem}>
          <Contact name={name} number={number} id={id}/>
        </li>
        )}
    </ul>
  )
}