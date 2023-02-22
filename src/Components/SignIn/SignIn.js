import React from 'react'
import './SignIn.css'
import { FcGoogle } from "react-icons/fc";
import {BsFacebook} from "react-icons/bs"
import {MdOutlineMailOutline} from "react-icons/md"
export default function SignIn() {
  return (
   <>
     <div className='container'>
      <div className='Heading'>
        <h3>Please sign in to continue</h3>
          <form method='' action=''>
          <div className='input-box'>
            <input type='Email' name='useremail'  required autoComplete='off'/>
            <label >Email</label>
            </div>
            <div className='input-box'>
            <input type='password' name='userpassword'  autoComplete='off' required/>
            <label>Password</label>
            </div> 
            <div className='button'>
             <button type='submit' className='btn'>SIGN IN</button>
              <div className='account-main'>
              <span className='account' >Don’t have an account yet?</span>
              <span ><a href='/' className='ancor'>Sign up</a></span>
              </div>
              <div className='icons'>
                <span><FcGoogle/></span>
                <span><BsFacebook/></span>
                <span><MdOutlineMailOutline/></span>
              </div>
            </div>
           
          </form>



      </div>

     </div>
   </>
  )
}
