import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'organic-farm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  productType: 'most-seller' | 'new' = 'most-seller';

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.productType === 'most-seller') {
      this.products = [{
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(40).jpg'
        },
        name: 'Organic green asparagus',
        price: {
          value: 6.99,
          currency: '$'
        },
        dimension: {
          value: 1,
          unit: 'bunch'
        }
      }, {
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(47).jpg'
        },
        name: 'Organic red pepper',
        price: {
          value: 9.99,
          currency: '$'
        },
        dimension: {
          value: 1,
          unit: 'kg'
        }
      }, {
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(14).jpg'
        },
        name: 'Organic Hass avocado',
        price: {
          value: 4.99,
          currency: '$'
        },
        dimension: {
          value: 1,
          unit: 'piece'
        }
      }, {
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(28).jpg'
        },
        name: 'Organic peaches',
        price: {
          value: 5.99,
          currency: '$'
        },
        dimension: {
          value: 1,
          unit: 'kg'
        }
      }]
    } else {
      this.products = [{
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(6).jpg'
        },
        name: 'Organic lettuce seedlings',
        price: {
          value: 3.99,
          currency: '$'
        },
        dimension: {
          value: 3,
          unit: 'pieces'
        }
      }, {
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(74).jpg'
        },
        name: 'Organic Italian olive oil',
        price: {
          value: 8.99,
          currency: '$'
        },
        dimension: {
          value: 500,
          unit: 'ml'
        }
      }, {
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(41).jpg'
        },
        name: 'Organic Polish strawberries',
        price: {
          value: 6.99,
          currency: '$'
        },
        dimension: {
          value: 500,
          unit: 'g'
        }
      }, {
        pic: {
          url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(76).jpg'
        },
        name: 'Organic Kenyan arabica',
        price: {
          value: 5.99,
          currency: '$'
        },
        dimension: {
          value: 500,
          unit: 'g'
        }
      }]
    }
  }
}


