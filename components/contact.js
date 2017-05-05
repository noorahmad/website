import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ContactListItem from '../components/contactListItem'

const Contact = () =>
  <main className='Contact'>
    <a name='contact' />
    <h2>Contact</h2>
    <ul className='contact-list-items'>

    <ContactListItem
      icon={prefixLink('/icon/facebook.svg')}
      href='https://www.facebook.com/noorahmad23'
      iconAlt='Facebook: noorahmad23'
    />

      <ContactListItem
        icon={prefixLink('/icon/github.svg')}
        href='https://github.com/noorahmad'
        iconAlt='Github: noorahmad'
      />

      <ContactListItem
        icon={prefixLink('/icon/linkedin.svg')}
        href='https://linkedin.com/in/noor-ahmad-619334133/'
        iconAlt='LinkedIn: Noor Ahmad'
      />

      <ContactListItem
        icon={prefixLink('/icon/mail.svg')}
        href='mailto:noorahmad23@gmail.com'
        iconAlt='Email: noorahmad23@gmail.com'
      />

      <ContactListItem
        icon={prefixLink('/icon/soundcloud.svg')}
        href='https://soundcloud.com/noor-ahmad-2'
        iconAlt='Soundcloud: noor-ahmad-2'
      />

    </ul>

  </main>

export default Contact
