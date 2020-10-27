import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteToCart, changeMsg } from '../actions';

class CartContainer extends Component {
    render(){
        var {cart} = this.props;
        return(
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }

    showCartItem =(cart)=>{
        var result = null;
        var {onDeleteCart, onChangeMessage} = this.props;
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return <CartItem    
                            item = {item}
                            key = {index}
                            onDeleteCart = {onDeleteCart}
                            onChangeMessage = {onChangeMessage}
                        />
            })
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length>0){
            result = <CartResult cart = {cart}/>
        }
        return result;
    }
}

const mapStateToProps = state =>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onDeleteCart:(product) =>{
            dispatch(actDeleteToCart(product));
        },
        onChangeMessage:(msg) =>{
            dispatch(changeMsg(msg));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);