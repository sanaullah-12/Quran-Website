import React from 'react'
import './Email.css'
export default function Email() {
  return (
    <>
     <div className='container-Email'>
      <div className='Heading'>
        <h3>Please sign in to continue</h3>
          <form method='' action=''>
          <div className='input-box'>
            <input type='Name' name='useremail'  required autoComplete='off'/>
            <label > First Name</label>
            </div>
            <div className='input-box'>
            <input type='Name' name='userpassword'  autoComplete='off' required/>
            <label>Last Name</label>
            </div>
            <div className='input-box'>
            <input type='Email' name='userpassword'  autoComplete='off' required/>
            <label>Email</label>
            </div>
            <div className='input-box'>
            <input type='password' name='userpassword'  autoComplete='off' required/>
            <label>Password</label>
            </div>
            <div className='input-box'>
            <input type='password' name='userpassword'  autoComplete='off' required/>
            <label>Confirm Password</label>
            </div> 
            <div className='button-signup'>
             <button type='submit' className='btn'>SIGN IN</button>
              <div className='main-acc'>
              <span className='account' >Don’t have an account yet?</span>
              <span ><a href='/' className='ancor1'>Sign up</a></span>
              </div>
            </div>
           
          </form>



      </div>

     </div>
   </>
  )
}
