package com.product.services.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.product.services.model.Product;


public interface ProductRepository  extends MongoRepository<Product,String>{
	List<Product> findByCategory(String category);
	List<Product> findByproductName(String productName);
	List<Product> findByproductType(String productType);
	

}
 


