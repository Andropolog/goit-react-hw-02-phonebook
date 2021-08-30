import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
      filter: this.state.filter,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      filter: "",
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const filterInput = this.state.filter.toLowerCase().trim();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterInput)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContactProp={this.addContact} />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />

        <ContactList
          filteredContactsProp={filteredContacts}
          handleDeleteProp={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
