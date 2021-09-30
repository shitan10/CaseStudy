package com.service.cart;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.cart.model.Cart;
import com.service.cart.repo.CartRepository;
@CrossOrigin(origins="http://localhost:3000")

@RestController

public class CartController {
@Autowired
  CartRepository cartrepo;
	
	@PostMapping("/addCart")
	public void addCart(@RequestBody Cart cart) {
            cartrepo.save(cart);	}
	
@GetMapping("/getallcart")
	
	public List<Cart> getAllCart() {
		return cartrepo.findAll();
	}
	
	
	@GetMapping("/getcart/{cartId}")
	public Optional<Cart> getById(@PathVariable(value="cartId")String cartId)
	{
		return cartrepo.findById(cartId);
	}
	
	@PutMapping("/updatecart/{cartId}")
	 public ResponseEntity<Cart> updatecartById(@PathVariable("cartId") String cartId, @RequestBody Cart cart) {
	   Optional<Cart> carttData = cartrepo.findById(cartId);

	   if (carttData.isPresent()) {
	     Cart cartt = carttData.get();
	     cartt.setCartId(cartt.getCartId());

	     cartt.setTotalPrice(cartt.getTotalPrice());


	   
	     return new ResponseEntity<>(cartrepo.save(cartt), HttpStatus.OK);
	   } else {
	     return new ResponseEntity<> (HttpStatus.NOT_FOUND);
	   }
	 }
	 


	
	
}
	