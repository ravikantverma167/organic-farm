import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import * as moment from 'moment';

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

  ngOnDestroy(): void {
    if (!!this.utilitySubscription) this.utilitySubscription.unsubscribe();
  }

}
