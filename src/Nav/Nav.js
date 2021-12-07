import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className='Nav'>
                <ul className='Nav__list'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/add-route'>Add Route</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav