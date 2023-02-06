import React from 'react'
import '../App.css'
import {Link} from  'react-router-dom'
export default function Nav() {
  return (
    <div className='header'>
        <div>Icon</div>
        <nav className='nav-header'>
            <li  className='home'>HOME</li>
            <li  className='the-journey'>THE JOURNEY</li>
            <Link className='team' to={'/team'}>TEAM</Link>
            <Link className='store' to={'/store'}>STORE</Link>
            <Link className='contact' to={'/contact'}>CONTACT</Link>
            {/* <li className='contact'><Link to='./Contact'>CONTACT</Link></li> */}
        </nav>
        <div>Profile</div>
    </div>
  )
}
