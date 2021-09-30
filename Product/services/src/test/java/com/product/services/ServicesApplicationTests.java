package com.product.services;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.product.services.model.Product;
import com.product.services.repo.ProductRepository;


import static org.mockito.Mockito.verify;

import java.util.List;

import static org.mockito.Mockito.times;


@SpringBootTest
class ProfileServiceApplicationTests {

@Autowired
ProductRepository productrepo;

@Test
@Order(1)
public void createProduct() {
	
	Product product= new Product();
	product.setProductId("2");
	product.setProductName("Dinner-set");
	product.setProductType("glass");
	product.setCategory("home");
	product.setImage("image url");
	product.setPrice((double) 250);
	product.setDescription(null);
	product.setSpecification("6pc");
	
	    
   productrepo.save(product);
   assertNotNull(productrepo.findById("2").get());
     	

}
@Test
@Order(2)
public void updateProductByProductTypeTest()
{
	Product product=productrepo.findById("2").get();
	product.setProductType("glass");
	productrepo.save(product);
	assertNotEquals("steel",productrepo.findById("2").get().getProductType());
}
@Test
@Order(3)
public void getProductByNameTest()
{
	Product product=productrepo.findById("2").get();
	assertEquals("Dinner-set",product.getProductName());
	
}

}
