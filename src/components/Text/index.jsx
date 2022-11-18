import React from 'react'
import './styles.scss'

const Text = ({ children, className = 'text' }) => {
  return <p className={className}>{children}</p>
}

export default Text
