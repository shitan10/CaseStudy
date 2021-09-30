package com.product.services.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




	@Document(collection="product")
	public class Product {
		@Id
		private String productId;
		private String productName;
		private String productType;
		private String category;
		private String image;
		private Double price;
		private String description;
		private String specification;
		
		
		
		
		public Product() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		public Product(String string, String string2, String string3, String string4, String string5, String string6,
				String string7, String string8) {
			// TODO Auto-generated constructor stub
		}

		public String getProductId() {
			return productId;
		}
		public void setProductId(String productId) {
			this.productId = productId;
		}
		public String getProductName() {
			return productName;
		}
		public void setProductName(String productName) {
			this.productName = productName;
		}
		public String getProductType() {
			return productType;
		}
		public void setProductType(String productType) {
			this.productType = productType;
		}
		public String getCategory() {
			return category;
		}
		public void setCategory(String category) {
			this.category = category;
		}
		public String getImage() {
			return image;
		}
		public void setImage(String image) {
			this.image = image;
		}
		public Double getPrice() {
			return price;
		}
		public void setPrice(Double price) {
			this.price = price;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getSpecification() {
			return specification;
		}
		public void setSpecification(String specification) {
			this.specification = specification;
		}
		
		

	}
