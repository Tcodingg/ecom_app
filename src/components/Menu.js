import React from 'react'
import {menuData} from './menuData'

export default function Menu() {
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
                            <a href='#' className="add_to_cart">Add</a>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}
