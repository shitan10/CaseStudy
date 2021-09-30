import React, { Component ,useState } from "react";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {TiShoppingCart} from "react-icons/ti"
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import AuthService from "./services/auth.service";
import Profile from "./components/pages/Profile";
import BoardAdmin from "./components/pages/BoardAdmin";
import BoardModerator from "./components/pages/BoardModerator";
import UserService from "./services/UserService";

import BoardUser from "./components/pages/BoardUser";
import "./App.css";
import "./index.css";
import Footercomponent from './components/Footercomponent';
import HeaderComponent from './components/HeaderComponent';
import ProductComponent from './components/ProductComponent';
import PostProduct from "./components/pages/PostProduct";
import EditProduct from "./components/pages/EditProduct";
import ProductCategory from "./components/pages/ProductCategory";
import CustomerComponent from "./components/pages/CustomerComponent";
import DeleteProduct from "./components/pages/DeleteProduct";
import ProductDetails from "./components/pages/ProductDetails";
import DeleteCustomer from "./components/pages/DeleteCustomer";
import CartItem from "./components/pages/CartItem";
import Checkout from "./components/Checkout";
import StripeButton from "./components/StripeButton";






class App extends Component {
  

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    
  }

  

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

  
  return (
    <div className="">
     
<div>
    <Router>
      
     <nav className="navbar navbar-expand  ">

   
          <Link to={"/"} className="navbar-brand logo">
          EShopping<font>Zone</font>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={"/"} className="navbar-brand">
                Home
                </Link>
            </li>

           

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item navbar-nav mr-auto">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>
         
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}  
          <div>

          <a href="/mycart"><TiShoppingCart size="2em" color="purple"/>  </a>
          </div>
        </nav>


      {/* <Navbar /> */}


























      <Switch>
      {/* <Route exact path={["/"]} component={Home} /> */}
        <Route path="/" exact component={ProductComponent} />
        <Route path="/register" exact component={Register} /> 
        <Route path="/login" exact component={Login} />
        <Route path="/viewcart" exact component={Cart} />
        <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

         <Route path="/productlist/:product" exact component ={ProductComponent}/> 
        <Route path="/productCategory/:category" exact component ={ProductCategory}/>
        <Route path="/productId/:productId" exact component ={ProductDetails}/>
        <Route path="/mycart/:productId" exact component ={Cart}/>
        <Route path="/mycart/" exact component ={CartItem}/>

        <Route path="/product" exact component ={PostProduct}/>
        <Route path="/deleteproduct" exact component ={DeleteProduct}/>
        <Route path="/updateproduct" exact component ={EditProduct}/>
       

        <Route path="/deletecustomer" exact component ={DeleteCustomer}/>
        <Route path="/customer" exact component ={CustomerComponent}/>
       {/* <Route path="/deleteCustomer/:customerId" exact component ={CustomerComponent}/> */}

       <Route path="/updateCustomer/:customerId" exact component ={CustomerComponent}/>


{/* Payment link */}
<Route path="/checkpayment" exact component ={Checkout}/>

<Route path="/payment" exact component ={StripeButton}/>


      </Switch>
    </Router>
    


     </div>
    </div>
  
    
    );
  }


}
export default App
