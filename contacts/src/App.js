import React, { Component } from 'react';
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

  render() {
    return (
      <div className="app">
        {this.state.screen === 'list' && (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
            onNavigate= { () => {
              this.setState({ screen:'create' })
            }}
          />
        )}

        {this.state.screen === 'create' && (
          <CreateContacts/>
        )}
      </div>
    )
  }
}

export default App;
