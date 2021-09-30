import axios from 'axios';
import React, { Component } from 'react'


import {Card,Button,Row,Col,Container,Grid} from "react-bootstrap"
import ProductComponent from '../ProductComponent';
import Cart from "./Cart" 


class  MyCart extends Component {

constructor(props) {
super(props)

this.state = {
        productId:this.props.match.params.productId ,
        product:[]
}
}


componentDidMount(){
axios.get(`http://localhost:8080/getcart/${this.state.productId}`)
.then((res)=>{
    this.setState({product:res.data});
});
}
render() {
const{product}= this.state

// const addToCarthandler=()=>{
// }
return (

 
<div className="">
  <div className="row">
    <div className="col col-sm-4">

    <Container>                      
            <Row >

            <Col md="3">
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={product.image}className="productimg" />
<Card.Body>
<Card.Title>{product.productName}</Card.Title>
<Card.Text>
    {product.description}
    {product.specification}
</Card.Text>
<Button variant="primary"  onClick={ () => this.addToCart(product.productId)}>ADD TO CART</Button>


</Card.Body>
</Card>
</Col>
  </Row>
  </Container>  
          
            </div>
            <Col>
  <div>
  </div>
  </Col>
            
            </div>         
                
                
           </div> 
                
       
    
)
}
}
export default MyCart;