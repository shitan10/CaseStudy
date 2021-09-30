import React, { Component } from "react";
import axios from "axios"
import AuthService from "../../services/auth.service";
import {Card,Button,Row,Col,Container} from "react-bootstrap"
import ProductDetails from "./ProductDetails";
import UserService from "../../services/UserService";
import ProductComponent from "../ProductComponent";

export default class BoardUser extends Component {

constructor(props) {
super(props)

this.state = {
      product:[]
}
}
  
componentDidMount() {
UserService.getUserBoard().then(
response => {
  this.setState({
    content: response.data
  });
},
error => {
  this.setState({
    content:
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
  });

}
);
}


viewDetails(productId){
this.props.history.push(`/productId/${productId}`);
}

showCategory(category){
this.props.history.push(`/productCategory/${category}`);
}
componentDidMount(){
axios.get('http://localhost:8080/getAllProducts')
.then((res)=>{
  this.setState({product:res.data});
});
}

render() {

const{product}=this.state
// const addToCarthandler=()=>{
//   props.addToCart(props.product.productId)
// }
return (



        <div className=" bgimg">
        <h2 className="text-center">Product List</h2>
        <div className="row">

          {this.state.product.map(
              product =>
                              
              <h6 key={product.Id}>

            <Container>                      
            <Row >

            <Col className="box">
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={product.image}className="productimg" />
            <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>Rs.
            {product.price}
            </Card.Text>
            <Button variant="primary"  onClick={ () => this.viewDetails(product.productId)}>View</Button>
  
            
            </Card.Body>
            </Card>
            </Col>
            </Row> 

            </Container>  



            </h6>
  )
}
</div>  

        
          <h1 className="text-center">Product Categories</h1>
        
              {
          product.length ?
          product.map(product=><div style={{display:'inline-block',margin:'5px',textAlign:'center'}} key={product.productId}>
              <div style={{display:'inline-block'}}>
                  <div>
                      <button className="Category Category1" onClick={ () => this.showCategory(product.category)}>{product.category}</button>
                  </div>
              </div>
          </div>
          ):null}


          </div>
)
}
}

