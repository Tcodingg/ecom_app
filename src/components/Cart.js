import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {BsTrashFill} from 'react-icons/bs'
import {REMOVE_FROM_CART} from '../redux/action'

export default function Cart() {
const dispatch = useDispatch();

 const inCart = useSelector(state => state.cart.cart);


    return (
        <section className='bd-container'>
            {inCart.map((item)=>{
                return(
                    <div key={item.id}>
                         <img src={item.image} alt=""/>
                         <h1>{item.title}</h1>
                         <button onClick={()=>dispatch(REMOVE_FROM_CART(item.id))}><BsTrashFill /></button>
                    </div>
                )
            })}
        </section>
    )
}
