import React from 'react';
import {PropTypes} from 'prop-types';

function ListContacts(props) {
  return <ol className = "contact-list">
    {
      props.contacts.map(contact => (
        <li key={contact.id} className="contact-list-item">
          <div className = "contact-avatar"
            style = {{
              backgroundImage: `url(${contact.avatarURL})`
            }}>
          </div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button className="contact-remove" onClick={()=>props.onDeleteContact(contact)}>Remove</button>
        </li>
      ))
    }
  </ol>;
}

ListContacts.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;
