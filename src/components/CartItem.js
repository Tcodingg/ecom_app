import React,{useState, useEffect} from 'react'
import '../style.css'

import {useSelector, useDispatch} from 'react-redux'
import {BsTrashFill} from 'react-icons/bs'
import {REMOVE_FROM_CART, ADJUST_QTY} from '../redux/action'

export default function CartItem({id, item}) {

    const {cart} = useSelector(state => state.cart); 
    const dispatch = useDispatch();
    const [input, setInput] = useState(item.qty);
    function handleInput(e){
        setInput(e.target.value);
    }

    function increment(){
        setInput(input + 1);
    }
    function decrement(){
        input>1? setInput(input - 1): dispatch(REMOVE_FROM_CART(id));
    }
    
    useEffect(()=>{
        function adjustQty(){
            dispatch(ADJUST_QTY(id, input))
        }adjustQty();

    }, [input])
    return (
        <section className='cart_item'>
                <div className="">
                    <div key={id} id={id}>
                        <img className='cart_img' src={item.image} alt=""/>
                        <h2 className='section-subtitle'>{item.title}</h2>
                        <h2 className='item_price'>{item.price}</h2>
                        <div className="adjust_qty">
                            <input onChange={handleInput} value={input} type="text"/>
                            <button className='increment_btn qty_btn' onClick={increment} >+</button>
                            <button className='decrement_btn qty_btn' onClick={decrement}>-</button>
                            <p className='remove_btn' onClick={()=>dispatch(REMOVE_FROM_CART(item.id))}><BsTrashFill /></p>
                        </div>
                    </div>
                </div>
        </section>
    )
}
