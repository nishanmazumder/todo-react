import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <div>{props.title}</div>
  )
}

Footer.propTypes = {
    title: PropTypes.string
}

export default Footer
