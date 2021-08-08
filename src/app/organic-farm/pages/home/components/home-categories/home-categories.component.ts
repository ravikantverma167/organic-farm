import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'organic-farm-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  categories: Category[] = [];


  constructor() { }

  ngOnInit(): void {
    this.categories = [{
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(10).jpg'
      },
      name: 'Vegetables'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(61).jpg'
      },
      name: 'Fruits'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(59).jpg'
      },
      name: 'Herbs'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(62).jpg'
      },
      name: 'Bread'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(63).jpg'
      },
      name: 'Pasta'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(64).jpg'
      },
      name: 'Nuts'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(66).jpg'
      },
      name: 'Legumes'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(70).jpg'
      },
      name: 'Rice'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(71).jpg'
      },
      name: 'Spices'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(71).jpg'
      },
      name: 'Coffee'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(73).jpg'
      },
      name: 'Tea'
    },
    {
      pic: {
        url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(75).jpg'
      },
      name: 'Dry fruits'
    }]
  }

}
