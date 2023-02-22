import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import Signup from '../Signup/Signup'
import './Navbar2.css'

export default function Navbar2() {


  return (
    <>
        <nav>
            <div className='logo' >
            <img src={logo} alt=''/>
            </div>
            <input type='checkbox' id='click'/>
             <label for='click' className='menubar'>
             <i className='fa fa-bars'></i>

             </label>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Payment</Link></li>
                <li>
                <Link to='/'>Courses</Link>
                <ul  className='dropdown' >

                 <li className='drop-li'><a href='/'>NAZRA</a></li>
                 <li className='drop-li'><a href='/'>TAFSEER</a></li>
                 <li className='drop-li'><a href='/'>TAJWEED</a></li>
                
                </ul>
                </li>
                <li><Link to='contact'>Contact</Link></li>
                <div>
                    <button className='btn1'>LOGIN</button>
                    <button className='btn2'>SIGNUP</button>
                </div>
            </ul>
        </nav>
    </>
  )
}
