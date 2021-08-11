import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'organic-farm-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  isProcessing = false;

  @Input()
  productType: 'most-seller' | 'new' = 'most-seller';

  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.fetch();
    // if (this.productType === 'most-seller') {
    //   this.products = [{
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(40).jpg'
    //     },
    //     name: 'Organic green asparagus',
    //     price: {
    //       value: 6.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 1,
    //       unit: 'bunch'
    //     }
    //   }, {
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(47).jpg'
    //     },
    //     name: 'Organic red pepper',
    //     price: {
    //       value: 9.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 1,
    //       unit: 'kg'
    //     }
    //   }, {
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(14).jpg'
    //     },
    //     name: 'Organic Hass avocado',
    //     price: {
    //       value: 4.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 1,
    //       unit: 'piece'
    //     }
    //   }, {
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(28).jpg'
    //     },
    //     name: 'Organic peaches',
    //     price: {
    //       value: 5.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 1,
    //       unit: 'kg'
    //     }
    //   }]
    // } else {
    //   this.products = [{
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(6).jpg'
    //     },
    //     name: 'Organic lettuce seedlings',
    //     price: {
    //       value: 3.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 3,
    //       unit: 'pieces'
    //     }
    //   }, {
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(74).jpg'
    //     },
    //     name: 'Organic Italian olive oil',
    //     price: {
    //       value: 8.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 500,
    //       unit: 'ml'
    //     }
    //   }, {
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(41).jpg'
    //     },
    //     name: 'Organic Polish strawberries',
    //     price: {
    //       value: 6.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 500,
    //       unit: 'g'
    //     }
    //   }, {
    //     pic: {
    //       url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(76).jpg'
    //     },
    //     name: 'Organic Kenyan arabica',
    //     price: {
    //       value: 5.99,
    //       currency: '$'
    //     },
    //     dimension: {
    //       value: 500,
    //       unit: 'g'
    //     }
    //   }]
    // }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }


  fetch() {
    this.isProcessing = true;
    this.httpService.get('products/').subscribe((items) => {
      this.products = (items || []).map((item: any) => new Product(item));
      if (this.productType == 'most-seller') {
        this.products = this.products.slice(2,6)
      } else  {
        this.products = this.products.reverse().slice(3, 7)
      }
      this.isProcessing = false;
    }, (err) => {
      this.isProcessing = false;
     })
  }
}
