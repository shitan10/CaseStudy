package com.service.cart.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="cart")
public class CartItems {
private String productName;
private Double price;
private int quantity;
       public CartItems() {
	
     }
	public CartItems(String productName, Double price, int quantity) {
		super();
		this.productName = productName;
		this.price = price;
		this.quantity = quantity;
	}
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

	@Override
	public String toString() {
		return "CartItem [price=" + price + ", quantity=" + quantity
				+ ", product=" + productName
				+ "]";
	}

}
