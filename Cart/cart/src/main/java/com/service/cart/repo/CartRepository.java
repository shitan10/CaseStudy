package com.service.cart.repo;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.service.cart.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {

}
