import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContacts from './CreateContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    screen: 'list',
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  createContacts = (contact) => {
    ContactsAPI.create(contact)
    .then(contact => {
      this.setState( state => ({
        contacts: state.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <div className="app">
          <Route exact path = "/" render = {() => (
              <ListContacts
                onDeleteContact = {this.removeContact}
                contacts = {this.state.contacts}
                onNavigate= { () => {
                  this.setState({ screen:'create' })
                }}
              />
            )}>
          </Route>
          <Route path="/create" render = {({history}) => (
            <CreateContacts
              onCreateContact = { contact => {
                this.createContacts(contact);
                history.push('/');
              }}/>
          ) } />
      </div>
    )
  }
}

export default App;
