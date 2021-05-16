import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component{
  state = {
    contacts: [
      {id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
      {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
      {id: uuidv4(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
    
  formSubmitHandler = data => {
    this.state.contacts.forEach(contact => (
      contact.name === data.name && alert('is alredy in contacts')
    ))

    this.setState(({contacts}) =>
      ({ contacts: [ data, ...contacts]}));
  }

  changeFilter = (e) => {
      this.setState({ filter: e.currentTarget.value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return (contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    )
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList arr={filteredContacts}/>
      </div>
    )
  }
}

export default App;