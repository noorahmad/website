import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import ContactListItem from '../components/contactListItem'
import styled from 'styled-components'
import {Padding} from 'styled-components-spacing'

const Contact = () =>
<Padding all={2}>
  <main className='Contact'>
    <ContactDeclaration>Contact</ContactDeclaration>
    <hr align="left" width="100%"/>
    <ContactDesc>Feel free to get reach out to me below!</ContactDesc>
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
</Padding>

const ContactDeclaration = styled.h1`
    text-align:center;
    padding-top: 30px;
`

const ContactDesc = styled.h3`
  text-align:center;
`



export default Contact
