import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ContactListItem from '../components/contactListItem'

const Contact = () =>
<div className='ContactContainer'>
    <h1 className='ContactDeclaration'>Contact</h1>
    <h3>Feel free to reach out to me below!</h3>
    <ul className='contact-list-items'>

    <ContactListItem
      icon='http://i.imgur.com/GBorIwZ.png'
      href='https://www.facebook.com/noorahmad23'
      iconAlt='Facebook: noorahmad23'
    />

      <ContactListItem
        icon='http://i.imgur.com/NI4lwAs.png'
        href='https://github.com/noorahmad'
        iconAlt='Github: noorahmad'
      />

      <ContactListItem
        icon='http://i.imgur.com/YIC9WYt.png'
        href='https://linkedin.com/in/noor-ahmad-619334133/'
        iconAlt='LinkedIn: Noor Ahmad'
      />

      <ContactListItem
        icon='http://i.imgur.com/sw0EO99.png'
        href='mailto:noorahmad23@gmail.com'
        iconAlt='Email: noorahmad23@gmail.com'
      />

      <ContactListItem
        icon='http://i.imgur.com/xRbAFcd.png'
        href='https://soundcloud.com/noor-ahmad-2'
        iconAlt='Soundcloud: noor-ahmad-2'
      />

    </ul>
</div>



export default Contact
