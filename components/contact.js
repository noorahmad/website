import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ContactListItem from '../components/contactListItem'

const Contact = () =>
  <main className='Contact'>
    <a name='contact' />
    <h2>Contact</h2>
    <ul className='contact-list-items'>
      <ContactListItem
        icon='github'
        href='https://github.com/noorahmad'
        text='Github: noorahmad'
      />
    </ul>
  </main>

export default Contact
