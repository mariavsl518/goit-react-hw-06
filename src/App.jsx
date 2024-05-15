import {SearchBox} from './components/SearchBox/SearchBox'
import {ContactsForm} from './components/ContactsForm/ContactsForm'
import {ContactList} from './components/ContactList/ContactList'
import './App.css'

export default function App () {

  return (
    <div>
    <ContactsForm/>

    <SearchBox/>

    <ContactList></ContactList>
    </div>
  )
}
