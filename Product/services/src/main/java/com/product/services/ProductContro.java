package com.product.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.services.model.Product;
import com.product.services.repo.ProductRepository;


@CrossOrigin(origins="http://localhost:3000")


@RestController
public class ProductContro {
	@Autowired
ProductRepository productrepo;	
	
	@PostMapping("/saveProduct")
	public void saveProduct(@RequestBody Product product) {
		productrepo.save(product);
	}
	
	
	
	@GetMapping("/getAllProducts")
	
	public List<Product> getAllProduct() {
		return productrepo.findAll();
	}
	
	
	@GetMapping("/{productId}")
	public Optional<Product> getById(@PathVariable(value="productId")String productId)
	{
		return productrepo.findById(productId);
	}
	@GetMapping("/productCategory/{category}")
	   
	   public List<Product> getByCategory(@PathVariable(value="category") String category){
		   

		return productrepo.findByCategory(category);
	   }
	 @GetMapping("/productName/{productName}")
	   public List<Product> getByName(@PathVariable(value="productName") String productName){
		   
		   return productrepo.findByproductName(productName);
	   }
	 @GetMapping("/productType/{productType}")
	   public List<Product> getByType(@PathVariable(value="productType") String productType){
		   return productrepo.findByproductType(productType);
	 }
		 
	 
	 @PutMapping("/updateProduct/{productId}")
	 public ResponseEntity<Product> updateProductById(@PathVariable("productId") String productId, @RequestBody Product product) {
	   Optional<Product> productData = productrepo.findById(productId);

	   if (productData.isPresent()) {
	     Product produc = productData.get();
	     produc.setProductId(produc.getProductId());
	     produc.setProductName(produc.getProductName());
	     produc.setProductType(produc.getProductType());

	     produc.setCategory(produc.getCategory());

	     produc.setImage(produc.getImage());

	     produc.setPrice(produc.getPrice());

	     produc.setDescription(produc.getDescription());
	     produc.setSpecification(produc.getSpecification());

	     return new ResponseEntity<>(productrepo.save(produc), HttpStatus.OK);
	   } else {
	     return new ResponseEntity<> (HttpStatus.NOT_FOUND);
	   }
	 }
	 
	 
	 @DeleteMapping("/deleteProduct/{productId}")
	 public ResponseEntity<Product> deleteProduct(@PathVariable("productId") String productId) {
	   try {
		   productrepo.deleteById(productId);
	     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   } catch (Exception e) {
	     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	   }
	 }

	 @DeleteMapping("/deleteAllProduct")
	 public ResponseEntity<Product> deleteAllProduct() {
	   try {
		   productrepo.deleteAll();
	     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   } catch (Exception e) {
	     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	   }
	 
	 }



	}


	  


	  
	


