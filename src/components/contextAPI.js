import { render } from "@testing-library/react";
import React,{Component} from "react";

class ProductProvider extends Component{
    state={
        product:[]
    }
}
getItem=(productId)=>{
const product=this.state.products.find(item=>item.id===id);
}
handleDetails=(id)=>{
    const product=this.getItem(id);
    this.setState({
        ProductDetails:product
    })
}

render(){
return(
    <ProductContext.Provider value={{
        ...this.state,
    }}>

        {this.props.children}
    </ProductContext.Provider>
)
}
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
