package org.jb.main.service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.jb.main.model.PaymentRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

@Service
public class PaymentService {

	@Value("sk_test_51JfQWPSDmzOGbfbUxLnqo8NZsBF3o37S0sd9ybBrPktg29MeHfbzyzPAWLCklLBavznmqcU2bhM8BBDMr5TJ8Cbv00laDdIlvV")
	private String secretKey;
	
    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }
	public String charge(PaymentRequest chargeRequest) throws StripeException {
		 Map<String, Object> chargeParams = new HashMap<>();
	     chargeParams.put("amount", chargeRequest.getAmount());
	     chargeParams.put("currency", PaymentRequest.Currency.INR);
	     chargeParams.put("source", chargeRequest.getToken().getId());
	     
		Charge charge = Charge.create(chargeParams);
		return charge.getId();
	}
}
