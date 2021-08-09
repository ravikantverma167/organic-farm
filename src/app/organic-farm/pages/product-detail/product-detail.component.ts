import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor() {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.product = {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(24).jpg'
      },
      name: 'Dark grapes from Italy, Lazio - 1kg',
      category: 'Fruits',
      price: {
        value: 11.99,
        currency: '$'
      },
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.Distinctio, officia quis dolore quos sapiente tempore alias.',
      dimension: {
        value: 0,
        unit: ''
      }
    }
  }

}
