import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>i am a fullstack developer from Kerala Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure corrupti dolore architecto saepe necessitatibus.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your name' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>

        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Karthika S. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privact Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer