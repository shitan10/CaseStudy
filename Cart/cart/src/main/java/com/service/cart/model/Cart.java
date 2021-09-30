package com.service.cart.model;

import java.util.ArrayList;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection="cart")
public class Cart {
	@Id

  private String cartId;
  private Double totalPrice;
  private String productName;
  private Double price;
  private int quantity;
  
           public String getProductName() {
	return productName;
}



public void setProductName(String productName) {
	this.productName = productName;
}



public Double getPrice() {
	return price;
}



public void setPrice(Double price) {
	this.price = price;
}



public int getQuantity() {
	return quantity;
}



public void setQuantity(int quantity) {
	this.quantity = quantity;
}



		public Cart() {
	    }
           
           
           
		public String getCartId() {
			return cartId;
		}
		public void setCartId(String cartId) {
			this.cartId = cartId;
		}
		public Double getTotalPrice() {
			return totalPrice;
		}
		public void setTotalPrice(Double totalPrice) {
			this.totalPrice = totalPrice;
		}


//
//	    @Override
//	    public String toString() {
//	        return "Cart [cartId=" + cartId
//                + ", totalPrice=" + totalPrice +  ", price=" + price +   ", productName=" + productName +"]";
//////	    }
//
//  
  
//	    }
}
