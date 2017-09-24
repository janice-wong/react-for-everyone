import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
  {
    id: 1,
    name: 'Scott',
    phone: '555 555 5555'
  },
  {
    id: 2,
    name: 'Janice',
    phone: '111 111 5555'
  },
  {
    id: 3,
    name: 'Tim',
    phone: '222 222 5555'
  },
  {
    id: 4,
    name: 'Jeff',
    phone: '333 333 5555'
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List </h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

render(<App contacts={contacts} />, document.getElementById('app'));
