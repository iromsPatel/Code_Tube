import { Component } from "react";
import Cart from "./Cart";

class CartList extends Component{
   
    render(){
        const{CartData,toggleFollow,addToCart}=this.props;
        return(
            <>
                    {CartData.map((CartData, i)=>
                            <Cart data={CartData}
                            toggleFollow={toggleFollow}
                            addToCart={addToCart}
                            />
                    )}
            </>
        )
    }
}

export default CartList;