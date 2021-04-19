import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import '../style.css'
import {BsBag} from 'react-icons/bs'

export default function Nav() {

    const [numberOfItems, setNumberOfItems] = useState(0)
    const inCart = useSelector(state => state.cart.cart);
   useEffect(()=>{
       setNumberOfItems(inCart.length);
   }, [inCart.length])

   console.log(numberOfItems)
    return (
        <header className="l-header" id="header">
            <nav className="nav body-container">
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item"><Link to='/order' className="nav_link">Order</Link></li>
                        <li className="nav_item"><a href="#" className="nav_link">Today's Special</a></li>
                    </ul>
                </div>
                <a href="" className="nav_logo">Breakfast Club</a>
                <div  class='cart-wrapper' style={{display:'flex', gap: '0.5rem'}}>
                <Link to='cart'>
                    <BsBag className='cart' />
                </Link>
                         <p className='number_of_items'>{numberOfItems}</p>

                </div>
            </nav>
        </header>
    )
}
