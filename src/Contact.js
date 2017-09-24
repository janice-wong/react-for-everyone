import React from 'react';

// this is now a stateless functional component that can take in multiple props
const Contact = ({contact, item}) =>
  <li>
    {contact.name} {contact.phone} {item}
  </li>

export default Contact;
