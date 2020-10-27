import * as TYPE from '../constants/ActionTypes'

var initState = [
    {
        product : {
            id:1,
            name : 'Iphone 7 plus',
            image: 'https://cdn.shopify.com/s/files/1/0101/2522/products/apple-iphone-7-plus-128gb-silver-appliph7pls128gbslv-by-apple-color-silver-8ca.jpg?v=1476808775',
            description: 'Sản phẩm do apple sản xuất',
            price: 500,
            inventory: 10,
            rating:3
        },
        quantity: 5
    }
    
]
    


const cart = (state = initState, action)=>{
    var {product, quantity} = action
    switch(action.type){
        case TYPE.ADD_TO_CART:
            console.log(action);
            var index = findProductInCart(state, product);
            if(index === -1){
                state.push({
                    product,
                    quantity
                })
            }else{
                state[index].quantity += quantity
            }
            
            return [...state];

        case TYPE.DELETE_TO_CART:
            console.log(action);
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            return [...state];

        default: return [...state];
    }
}

var findProductInCart = (cart, product)=>{
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i<cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index
}

export default cart;