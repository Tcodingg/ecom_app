import React from 'react'
import {useSelector} from 'react-redux'

export default function Cart() {
const inCart = useSelector(state => state.cart.cart);

    return (
        <section className='bd-container'>
            {inCart.map((item)=>{
                return(
                    <div key={item.id}>
                         <img src={item.image} alt=""/>
                         <h1>{item.title}</h1>
                    </div>
                )
            })}
        </section>
    )
}
