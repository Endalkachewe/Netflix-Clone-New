import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function foo() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
            <div className='footer_icons'>
                <FaFacebookF />
                <FaInstagramSquare />
                <FaYoutube />
            </div>
            <div className='footer_data'>
               <div>
                 <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                 </ul>       
                </div>
                <div>
                    <ul>
                        <li>Help center</li>
                        <li>jobs </li>
                        <li>Cookie Preferance</li>
                    </ul>
                </div>
                <div>
                   <ul>
                    <li>Gift Card</li>
                    <li>Terms of use</li>
                    <li>Corporate Information</li>
                   </ul>   
                </div>
                <div>
                    <ul>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact us</li>
                    </ul>
                </div>     
            </div>
            <div className='service_code'>Service Code</div>
            <div className='copy_writer'> ©1997-2024 Netflix Isc</div>
      </div>
    </div>
  )
}

export default foo
