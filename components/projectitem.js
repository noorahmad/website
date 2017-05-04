import React from 'react'

const ProjectItem = ({ name, imgSrc, imgAlt, desc }) =>
  <section className='ProjectItem'>
    <h3>{name}</h3>
    <img src={imgSrc} alt={imgAlt} />
    <p>{desc}</p>
    <div style={{ clear: 'both' }} />
  </section>

ProjectItem.propTypes = {
  name: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
  imgAlt: React.PropTypes.string,
  desc: React.PropTypes.string
}

export default ProjectItem
