import React, { Component } from 'react'
import ProductService from '../../services/ProductService';
import CartService from '../../services/CartService';
export class Cart extends Component {


  constructor(props) {
    super(props)
    
    this.state = {
            productId:this.props.match.params.productId ,
            productName: '',
            price:'',
            quantity:'',
            totalPrice:''
    }
    this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.changeTotalHandler = this.changeTotalHandler.bind(this);
    this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }
    componentDidMount(){
      ProductService.getProductById(this.state.productId).then( (res) =>{
          let products = res.data;
          this.setState({
              productName: products.productName,
              price:products.price,
              quantity:'1',
              totalPrice:''
          });
      });
  }


  saveOrUpdateProduct = (e) => {
    e.preventDefault();
    let products = {productName: this.state.productName, price: this.state.price, quantity:this.state.quantity,totalPrice:this.state.totalPrice};
    console.log('products => ' + JSON.stringify(products));

    CartService.createCart(products).then(res =>{
      alert("Product Added Successfully");
      this.props.history.push('/getcart/:cartId');
  });

  
}
changeProductNameHandler= (event) => {
this.setState({productName: event.target.value});
}
changePriceHandler= (event) => {
this.setState({price: event.target.value});
}
changeQuantityHandler= (event) => {
this.setState({quantity: event.target.value});
}
changeTotalHandler= (event) => {
this.setState({totalPrice: event.target.value});
}







  render(){
    const {currentUser}=this.state
    return (
        <div>
            
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <div className = "card-body">
                              <form>
                                <div className = "form-group">
                                        
                                    <div className = "form-group">
                                        <label> Product Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control" 
                                            value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Price </label>
                                        <input placeholder="Price" name="price" className="form-control" 
                                            value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantity </label>
                                        <input  type="number" min="1" placeholder="Quantity" name="quantity" className="form-control" 
                                            value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Total Price </label>
                                        <input placeholder="Total Price" name="totalPrice" className="form-control" 
                                            value={this.state.totalPrice=this.state.price*this.state.quantity} onChange={this.changeTotalHandler} disabled ={true}/>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                            </div>
                                
                                  </form>
                                  </div>
                        </div>
                    </div>

               </div>

        </div>
    )
}
}


export default Cart
