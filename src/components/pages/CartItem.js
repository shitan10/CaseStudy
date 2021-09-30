import React, { Component } from 'react'
import axios from 'axios';

import {Card,Button,Row,Col,Container} from "react-bootstrap"

export default class CartItem extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             cart:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8083/getallcart')
        .then((res)=>{
            this.setState({cart:res.data});
        });
    }


    render() {
        const{cart}=this.state
       
        return (

        

            <div className=" bgimg">
            

                <h2 className="text-center">Cart List</h2>
                <div className="row">
                   
                    

                       
                            {this.state.cart.map(
                                cart =>
                                <h6 key={cart.Id}>

            <Container>                      
            <Row >

            <Col className="box">
            <Card style={{ width: '18rem'}}>
          
            <Card.Body>
            <Card.Title>{cart.productName}</Card.Title>
            <Card.Text>Price :  Rs.
            {cart.price} 
            <br></br>
            Total Price  :
            {cart.totalPrice}
            <br></br>
            Quantity     :   
            {cart.quantity}
            </Card.Text>

           

            </Card.Body>
            </Card>
            </Col>
            </Row> 

            </Container>  



</h6>
)
}
</div>




</div>
        )
    }
}



