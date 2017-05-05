import React from 'react'

const ContactListItem = ({ icon, href, iconAlt }) =>
  <li className='ContactListItem'>
    <a href={href}><img src={icon} alt={iconAlt} /></a>
    <span style={{ marginRight: '12px' }} />
  </li>

  const propTypes = {
    iconAlt: React.PropTypes.string,
    icon: React.PropTypes.string,
    href: React.PropTypes.string
  }

export default Object.assign(ContactListItem, propTypes)
