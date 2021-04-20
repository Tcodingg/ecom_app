import {menuData} from '../components/menuData'
const INITIAL_STATE={
    products: menuData,
    cart: [],
    currentItem: 'null'
}
export const cartReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            let selectedItem = state.products.find((i)=> i.id === action.payload.id)
           let inCart = state.cart.find((byId)=>  byId.id === action.payload.id ? true : false
           );
        // console.log(state.cart)
            return {
                ...state,
                // if the item is in cart: find the item in the cart and increaste the qty by 1
                cart: inCart? state.cart.map((item)=>
                    item.id===action.payload.id ? {...item, qty:item.qty + 1} : item
                )
                // if the item is not in the cart: copy all items in the cart and set the qty of the selected item to 1
                :[...state.cart, {...selectedItem, qty: 1}],
            }
        case 'REMOVE_FROM_CART':

            return {
                ...state, 
                cart: state.cart.filter((item)=> item.id !==action.payload.id)
            }
        case 'ADJUST_QTY':
            return {
                ...state,
                //find the item 
                cart: state.cart.map((item)=> item.id ===action.payload.id? {...item, qty: +action.payload.qty }: item)
            }
        case 'LOAD_CURRENT_ITEM':
            return state;
        default:
            return state;
    }
    
}