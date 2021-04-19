import React from 'react'
import {menuData} from './menuData'
import {ADD_TO_CART} from '../redux/action'
import {useDispatch, useSelector} from 'react-redux'


export default function Menu() {
    const dispatch = useDispatch();
    // const add_to_cart = useSelector(state => state.cartReducer)
    return (
        <section className="menu section bd-container">
                <h2 className="menu_title section-title">Menu</h2>
            <div className="menu_container bd-grid">
                {menuData.map((menu)=>{
                    return(
                        <div key={menu.id} className="menu_data">
                            <img src={menu.image} className='menu_data_img' alt=""/>
                            <h4 className="menu_data_title ">{menu.title}</h4>
                            <p className="menu_data_price">{menu.price}</p>
                            <p onClick={()=>dispatch(ADD_TO_CART(menu.id))} className="add_to_cart">Add</p>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}
