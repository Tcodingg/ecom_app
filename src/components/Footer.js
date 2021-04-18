import React from 'react'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className="section bd-container">
            <div className="footer_container bd-grid">
                <div className="footer_content">
                    <a href="#" className="footer_logo">Breakfast Club</a>
                    <div>
                        <a href="#" className="social"><FiFacebook /></a>
                        <a href="#" className="social"><FiTwitter /></a>
                        <a href="#" className="social"><FiInstagram /></a>
                       
                    </div>

                </div>
                <div className="footer_content">
                    <h3 className="footer_title">Services</h3>
                    <ul>
                        <li><a href="#" className="footer_link">Delivery</a></li>
                        <li><a href="#" className="footer_link">Take Out</a></li>
                        <li><a href="#" className="footer_link">Customer Service</a></li>
                    </ul>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Contact Us</h3>
                    <ul>
                        <li>908 Main St. Toronto</li>
                        <li>breakfastclub@mail.com</li>
                        <li>(647)874-9987</li>
                    </ul>
                </div>
            </div>

            <p className="footer_copy">&#169; 2021. All Rights Reserved.</p>
        </footer>
    )
}
