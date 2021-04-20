import React,{useState, useEffect} from 'react'


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
        setInput((preVal)=>preVal + 1)
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
        <section className='bd-container'>
                <div key={id} id={id}>
                    <img src={item.image} alt=""/>
                    <h1>{item.title}</h1>
                    <button onClick={()=>dispatch(REMOVE_FROM_CART(item.id))}><BsTrashFill /></button>
                    <input onChange={handleInput} value={input} type="text"/>
                    <button onClick={increment} >+</button>
                    <button onClick={decrement}>-</button>
                </div>
    </section>
    )
}
