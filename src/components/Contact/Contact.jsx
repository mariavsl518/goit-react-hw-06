import React from 'react';
import {remove} from '../../redux/contactsSlice.js';
import { useDispatch } from "react-redux";
import css from './Contact.module.css'

export const Contact = ({ id, name, number }) => {

  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <p> {name} : {number}</p> 
      <button onClick={()=>dispatch(remove(id))}
      className={css.deleteBtn}>x</button>
    </div>
  )
}