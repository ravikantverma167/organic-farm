import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product;

  cart: Array<any> = [];
  utilitySubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private cartService: CartService,
    private utilityService: UtilityService
  ) {
    this.utilitySubscription = this.utilityService.getCart.subscribe(cart => {
      if (cart) {
        this.cart = cart;
        this.UpdateProductQuantity();
      }
    });
    this.product = new Product();
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    this.getProduct(productId);
  }

  getProduct(productId: number | string) {
    this.httpService.get(`products/${productId}`).subscribe((item) => {
      this.product = new Product(item);
      this.UpdateProductQuantity();
    }, (err) => {
    })
  }

  UpdateProductQuantity() {
    const cartItem = this.cart.find(item => item.id === this.product.id);
    if (cartItem) {
      this.product['selectedQuantity'] = cartItem.selectedQuantity || 0;
    }  else {
      this.product['selectedQuantity'] = 0;
    }
  }


  addQuantity(item: any): void {
    this.cartService.addToCart(item);
  }

  minsQuantity(item: any): void {
    this.cartService.removeFromCart(item, false);
  }
  
  addToCart(item: any, is_buy: boolean = false): void {
   this.cartService.addToCart(item, is_buy);
  }

  ngOnDestroy(): void {
    if (!!this.utilitySubscription) this.utilitySubscription.unsubscribe();
  }

}
