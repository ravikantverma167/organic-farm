import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
declare const Razorpay: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  minTime: any = moment().add(1, 'day');
  maxTime: any = moment().add(2, 'day');

  totalPrice: number = 0;
  cart: Array<any> = [];
  utilitySubscription: Subscription;

  constructor(
    private router: Router,
    private cartService: CartService,
    private utilityService: UtilityService
  ) {
    this.utilitySubscription = this.utilityService.getCart.subscribe(cart => {
      if (cart) {
        this.cart = cart;
        this.getTotalPrice();
      }
    });
  }

  ngOnInit(): void {

  }

  addQuantity(item: any): void {
    this.cartService.addToCart(item);
  }

  minsQuantity(item: any): void {
    this.cartService.removeFromCart(item, false);
  }

  removeItem(item: any): void {
    this.cartService.removeFromCart(item, true);
  }

  getTotalPrice(): number {
    this.totalPrice = 0;

    this.cart.forEach((item) => {
      this.totalPrice += item.selectedQuantity * item.price.value;
    });

    return this.totalPrice;
  }

  onPay(): void {
    var self = this;

    function responseHandler(response: any) {
      alert(response.razorpay_payment_id);
      self.utilityService.setCart([]);
      self.router.navigate(['/']);
      setTimeout(() => {
        window.location.reload();
      }, 100)
    }

    const options = {
      "key": "rzp_test_Q1UJwCwkoVDlEx", // Enter the Key ID generated from the Dashboard
      "amount": Math.round(this.totalPrice) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "USD",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20200722%2Foriginal%2Fpngtree-organic-farm-square-tree-logo-vector-png-image_5044491.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Forganic-farm-square-tree-logo-vector_5044491.html&tbnid=VBCx2ReyCKX73M&vet=12ahUKEwi9sabfn-b0AhU8zqACHTVVAVUQMygHegUIARDTAQ..i&docid=iA10AtN3p-6JlM&w=1200&h=1200&itg=1&q=square%20farm%20image%20logo&ved=2ahUKEwi9sabfn-b0AhU8zqACHTVVAVUQMygHegUIARDTAQ",
      "handler": responseHandler,
      "prefill": {
        "name": "Ravikant Verma",
        "email": "ravikantverma167@gmail.com",
        "contact": "9896479747"
      },
      "theme": {
        "color": "#82B440"
      }
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  }

  ngOnDestroy(): void {
    if (!!this.utilitySubscription) this.utilitySubscription.unsubscribe();
  }

}
