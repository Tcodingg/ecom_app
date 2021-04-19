import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {BsTrashFill} from 'react-icons/bs'
import {REMOVE_FROM_CART} from '../redux/action'

export default function Cart() {
const inCart = useSelector(state => state.cart.cart);
const dispatch = useDispatch();

    return (
        <section className='bd-container'>
            {inCart.map((item)=>{
                return(
                    <div key={item.id}>
                         <img src={item.image} alt=""/>
                         <h1>{item.title}</h1>
                         <p onClick={()=>dispatch(REMOVE_FROM_CART(item.id))}><BsTrashFill /></p>
                    </div>
                )
            })}
        </section>
    )
}
