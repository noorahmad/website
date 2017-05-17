import React from "react"
import { Link } from "react-router"
import { config } from "config"

const Template = ({ children }) =>
  <div>
    {children}
  </div>

const propTypes = {
  children: React.PropTypes.any
}

export default Object.assign(Template, propTypes)
