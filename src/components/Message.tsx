import React from 'react'
import { Link } from 'react-router-dom'
export default function Message() {
  return (
    <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
    </div>
  )
}
