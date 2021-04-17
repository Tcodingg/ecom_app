import React from 'react'
import {Link} from 'react-router-dom';
import '../style.css'
import {BsBag} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'

export default function Nav() {
    return (
        <header className="l-header" id="header">
            <nav className="nav body-container">
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item"><a href="#" className="nav_link">Order</a></li>
                        <li className="nav_item"><a href="#" className="nav_link">Today's Special</a></li>
                    </ul>
                </div>
                <a href="" className="nav_logo">Breakfast Club</a>
                <Link to='cart'>
                    <BsBag className='cart' />
                </Link>
            </nav>
        </header>
    )
}
