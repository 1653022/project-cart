import * as TYPE from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) =>{
    return{
        type: TYPE.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteToCart = (product) =>{
    return {
        type: TYPE.DELETE_TO_CART,
        product
    }
}

export const changeMsg = (msg) =>{
    return{
        type: TYPE.CHANGE_MSG,
        msg
    }
}