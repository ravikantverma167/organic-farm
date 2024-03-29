import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'organic-farm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private httpService: HttpService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.getCategories();
    this.getProducts();

    // this.categories = [{
    //   pic_url: '', 
    //   name:'Vegetables'
    // },
    // {
    //   pic_url: '', 
    //   name:'Fruits'
    // },
    // {
    //   pic_url: '', 
    //   name:'Herbs'
    // } ,{
    //   pic_url: '', 
    //   name:'Bread'
    // },{
    //   pic_url: '', 
    //   name:'Pasta'
    // },{
    //   pic_url: '', 
    //   name:'Buts'
    // },{
    //   pic_url: '', 
    //   name:'Legumes'
    // },{
    //   pic_url: '', 
    //   name:'Spices'
    // },{
    //   pic_url: '', 
    //   name:'Coffee'
    // },{
    //   pic_url: '', 
    //   name:'Active'
    // },{
    //   pic_url: '', 
    //   name:'Tea'
    // },{
    //   pic_url: '', 
    //   name:'Dry fruits'
    // }]

    // this.products = [{
    //   pic: {
    //     url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(40).jpg'
    //   },
    //   name: 'Organic green asparagus',
    //   price: {
    //     value: 6.99,
    //     currency: '$'
    //   },
    //   dimension: {
    //     value: 1,
    //     unit: 'bunch'
    //   }
    // }, {
    //   pic: {
    //     url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(47).jpg'
    //   },
    //   name: 'Organic red pepper',
    //   price: {
    //     value: 9.99,
    //     currency: '$'
    //   },
    //   dimension: {
    //     value: 1,
    //     unit: 'kg'
    //   }
    // }, {
    //   pic: {
    //     url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(14).jpg'
    //   },
    //   name: 'Organic Hass avocado',
    //   price: {
    //     value: 4.99,
    //     currency: '$'
    //   },
    //   dimension: {
    //     value: 1,
    //     unit: 'piece'
    //   }
    // }, {
    //   pic: {
    //     url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(28).jpg'
    //   },
    //   name: 'Organic peaches',
    //   price: {
    //     value: 5.99,
    //     currency: '$'
    //   },
    //   dimension: {
    //     value: 1,
    //     unit: 'kg'
    //   }
    // }]
  }

  getCategories() {
    this.httpService.get('categories/').subscribe((items) => {
      console.log(items);
      this.categories = items || [];
    }, (err) => {
    })
  }

  getProducts() {
    this.httpService.get('products/').subscribe((items) => {
      this.products = (items || []).map((item: any) => new Product(item));
    }, (err) => {
    })
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}


