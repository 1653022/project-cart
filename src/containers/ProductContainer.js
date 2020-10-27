
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import { actAddToCart, changeMsg } from '../actions';

class ProductContainer extends Component {
    render(){
        var {products} = this.props
        return(
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }
    showProduct(products){
        var result = null;
        var {onAddToCart, onChangeMsg} = this.props
        if(products.length > 0){
            result =  products.map((product, index) =>{
                return <ProductItem product = {product}
                                    key = {index}
                                    onAddToCart = {onAddToCart}
                                    onChangeMsg = {onChangeMsg}
                        />
            });

        }
        return result;
    }
}

const mapStateToProps = state =>{
    return{
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddToCart: (product) =>{
            dispatch(actAddToCart(product, 1));
        },
        onChangeMsg :(msg) =>{
            dispatch(changeMsg(msg));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
