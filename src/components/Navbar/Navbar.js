import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bootstrap from "react-bootstrap";
import {GrCart} from "react-icons/gr"
import { FaShoppingCart } from "react-icons/fa";
import {TiShoppingCart} from "react-icons/ti"
import { MenuList } from  "./MenusList";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        EShopping<font>Zone</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "FaShoppingCart" : "fas fa-bars"}></i>
     </div>
     <ul className= "menu-list">{menuList}</ul>

     <div><a href="/customer"> Customer</a></div>
     <div><a href="/product"> Add Product</a></div>
     <div><a href="/editproduct"> Edit Product</a></div>
       <a href="/viewcart"><TiShoppingCart size="2em" color="purple"/>  </a>  </nav>
  );
};

export default Navbar;

