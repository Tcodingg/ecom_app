import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import '../style.css'
import {BsBag} from 'react-icons/bs'

export default function Nav() {

    const [numberOfItems, setNumberOfItems] = useState(0)
    const [totalQty, setTotalQty] = useState(0);
    const inCart = useSelector(state => state.cart.cart);
    const {cart} = useSelector(state => state.cart);

    let numQty = 0;

   useEffect(()=>{
       setNumberOfItems(inCart.length);
        cart.forEach((item) => numQty += item.qty);
        setTotalQty(numQty)

        
    }, [inCart.length, cart])
    
    // console.log(totalQty)

 
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
                <div  className='cart-wrapper' style={{display:'flex',position: 'relative',alignItems:'center', gap: '0.5rem'}}>
                <Link style={{zIndex:'2'}}  to='cart'>
                    <BsBag className='cart' />
                </Link>
                         <p style={{position:'absolute', fontSize: '10px', left: '9px', zIndex:'1'} } className='number_of_items'>{totalQty}</p>

                </div>
            </nav>
        </header>
    )
}
