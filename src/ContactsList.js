import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  addContact(event) {
    event.preventDefault();
    // this prevents the whole page from refreshing
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor((Math.random() * 100) + 1);
    console.log(this.refs.name.value);
    this.setState({
      contacts: this.state.contacts.concat({id, name, phone})
    })
    this.refs.name.value = '';
    this.refs.phone.value = '';
  }

  render() {
    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        // if you CAN find ( !== -1 ) in contacts, then return
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      // controlled component using state - we want this because every time we update it, we were using the value
      // uncontrolled component using refs - to grab value from input without having to set into state
      <div>
        <input type="text"
          placeholder="Search Name"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <form onSubmit={this.addContact.bind(this)}>
          <input type="text" ref="name" />
          <input type="text" ref="phone" />
          <button type="submit">Add New Contact</button>
        </form>
        <ul>
          {filteredContacts.map( (contact) => {
              return <Contact contact={contact} item="hello" key={contact.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default ContactsList;
