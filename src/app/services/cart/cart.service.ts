import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<any> = [];
  cartSubscription: Subscription;

  constructor(
    private router: Router,
    private utilityService: UtilityService
  ) {
    this.cartSubscription = this.utilityService.getCart.subscribe(cart => {
      if (cart) {
        this.cart = cart;
      }
    });
  }

  emptyCart() {
    this.utilityService.setCart([]);
  }


  addToCart(product: any, is_buy?: boolean) {
    let cartItem = this.cart.find(c => c.id === product.id)
    if (cartItem) {
      cartItem.selectedQuantity = cartItem.selectedQuantity + 1;
    } else {
      product.selectedQuantity = 1;
      this.cart.push(product);
    }

    this.utilityService.setCart(this.cart);
    if (is_buy) {
      this.router.navigate(['/cart']);
    }
  }



  removeFromCart(product: any, permanently: boolean): void {
    let index = this.cart.findIndex(x => x.id === product.id);

    if (permanently) {
      this.cart.splice(index, 1);
    } else {
      const cartItem = this.cart[index];
      cartItem['selectedQuantity'] -= 1; 
      if (cartItem['selectedQuantity'] <= 0) {
        this.cart.splice(index, 1);
        cartItem['selectedQuantity'] = 0;
      }
    }

    this.utilityService.setCart(this.cart);
  }

}
