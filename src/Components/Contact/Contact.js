import React, { useState } from 'react'
import vector from '../../Assets/Images/vector contact.png'
import './contact.css'
export default function Contact() {
  const [Name, SetName] = useState('')
  const [Email, SetEmail] = useState('')
  const [Text, SetText] = useState('')

  function SubmitHandler(e) {
    e.preventDefault()
    if(Email){
      alert('you successfully submit form')
    }else{
      alert('please fill all inputs')
    }
  }
  return (
    <>
      <div className='Container'>
        <div className='heading'>
          <h3>Contact</h3>
          <img src={vector} alt='' />
        </div>
        <div className='main-contact'>
          <div className='contact-Us'>
            <h2>Contact Us</h2>
            <span className='info'> + 92 - 3135064381</span>
            <span className='info'>Atiq212@gmail.com</span>
            <span className='info'> Islamabad  f11/4</span>

          </div>
          <div>
            <form onSubmit={SubmitHandler}>
              <input type='text' name='name' placeholder='Name' className='form-data'
                value={Name}
                onChange={(e) => SetName(e.target.value)} />
              <input type='Email' name='User-Email' placeholder='Email' className='form-data-2'
                value={Email}
                onChange={(e) => SetEmail(e.target.value)} />
              <textarea name='message' placeholder='Type here' className='form-data-3'
                value={Text}
                onChange={(e) => SetText(e.target.value)}></textarea>
              <button className='btn-submit' type='submit'>Submit</button>
            </form>
          </div>
        </div>
       
      </div>
    </>
  )
}
