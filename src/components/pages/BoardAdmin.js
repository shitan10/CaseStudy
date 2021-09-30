import React, { Component } from "react";
import axios from 'axios'
import UserService from "../../services/UserService";

import authHeader from "../../services/auth-header";
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
  UserService.getAdminBoard().then(
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

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <button style={{backgroundColor:'#f1356d',width:'100px',borderRadius:'8px',margin:'5px'}}><a href="/product" style={{color:'white',textDecoration:'none'}}>ADD PRODUCT</a></button>
         
          <button style={{backgroundColor:'#f1356d',width:'100px',borderRadius:'8px',margin:'5px'}}><a href="/deleteproduct" style={{color:'white',textDecoration:'none'}}>DELETE PRODUCT</a></button>
          
          <button style={{backgroundColor:'#f1356d',width:'100px',borderRadius:'8px',margin:'5px'}}><a href="/updateproduct/product" style={{color:'white',textDecoration:'none'}}>UPDATE PRODUCT</a></button>
          <button style={{backgroundColor:'#f1356d',width:'100px',borderRadius:'8px',margin:'5px'}}><a href="/deletecustomer" style={{color:'white',textDecoration:'none'}}>DELETE CUSTOMER</a></button>
        </header>
      </div>
    );
  }
}
