import React from 'react'
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import {BsFacebook} from "react-icons/bs"
import {MdOutlineMailOutline} from "react-icons/md"
// import facebook from '../../Assets/Images/fb-icon.png'
// import email from '../../Assets/Images/Email.png'
export default function Signup() {
    return (
        <>
            <div className='container'>
            <div>
            <i className="fa-solid fa-xmark"></i>
            </div>
                <div className='heading'>
                    <h3>Join Quran Academy</h3>
                    <div className='signup-container'>
                    <div className='google'>
                        <span className='icon'><FcGoogle/></span>
                        <span className='text'>Signup with Google</span>
                    </div>
                    <div className='google'>
                        <span className='icon'><BsFacebook/></span>
                        <span className='text'>Signup with Facebook</span>
                    </div>
                    <div className='google'>
                        <span className='icon'><MdOutlineMailOutline/></span>
                        <span className='text'>Signup with Email</span>
                    </div>
                    <div className= 'signin-ancor'>
                        <span >Already have an account? </span>
                        <span ><a href='/contact' className='anchor'>Sign In</a></span>
                    </div>
                      <div className='signin-ancor-2'>
                        <span className='policies'>Click “Sign Up” to agree to Quran Academy's </span>
                        <span><a href='/' className='policies'>Terms of Services.</a></span>
                      </div>
                    </div>
                
               
                        </div>
            </div>
        </>
    )
}
