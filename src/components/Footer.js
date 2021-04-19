import React,{useState, useEffect} from 'react'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {useLocation} from 'react-router-dom'


export default function Footer() {

    //hide footer in the cart url
    const [hideFooter, setHideFooter] = useState(false);
    let location = useLocation();
    useEffect(()=>{
        location.pathname === '/cart'? setHideFooter(true): setHideFooter(false);
    },[location]) ;


    return (
        <footer style={{display: hideFooter? 'none': 'block'}} className="footer section bd-container">
            <div className="footer_container bd-grid">
                <div className="footer_content">
                    <a href="#" className="footer_logo">Breakfast Club</a>
                    <div>
                        <a href="/home" className="social"><RiFacebookBoxFill /></a>
                        <a href="/#" className="social"><RiTwitterFill /></a>
                        <a href="/#" className="social"><RiInstagramFill/></a>
                    </div>
                </div>
                <div className="footer_content">
                    <h3 className="footer_title">Services</h3>
                    <ul>
                        <li><a href="/#" className="footer_link">Delivery</a></li>
                        <li><a href="/#" className="footer_link">Take Out</a></li>
                        <li><a href="/#" className="footer_link">Customer Service</a></li>
                    </ul>
                </div>
                <div className="footer_content">
                    <h3 className="contact footer_title ">Contact Us</h3>
                    <ul>
                        <li>908 Main St. Toronto</li>
                        <li>breakfastclub@mail.com</li>
                        <li>(647)874-9987</li>
                    </ul>
                </div>
            </div>
            <p className="footer_copy">&#169; Breakfast Club 2021. All rights reserved.</p>
        </footer>
    )
}
