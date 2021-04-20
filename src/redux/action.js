export const ADD_TO_CART = (itemId)=>{
    return{
        type: "ADD_TO_CART", 
        payload:{
            id: itemId, 
        }
    }
}

export const REMOVE_FROM_CART = (itemId)=>{
    return{
        type: "REMOVE_FROM_CART", 
        payload:{
            id: itemId, 
        }
    }
}
export const ADJUST_QTY = (itemId, itemQty)=>{
    return{
        type: "ADJUST_QTY", 
        payload:{
            id: itemId, 
            qty: itemQty
        }
    }
}