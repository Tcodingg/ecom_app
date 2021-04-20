import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CartItem from './CartItem'

export default function Cart() {
const dispatch = useDispatch();
const {cart}= useSelector(state => state.cart);



    return (
        <div>
            {cart.map((item)=>{
                return(
                    <CartItem key={item.id} id={item.id} item = {item} />

                )
            })}
        </div>
    )
}
