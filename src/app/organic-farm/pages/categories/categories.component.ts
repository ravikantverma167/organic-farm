import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'organic-farm-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.categories=[{
      pic_url: 'https://mdbootstrap.com/img/Photos/Horizontal/Eco/img(24).jpg', 
      name:'veg'
    }]
    // this.fetch();
  }

  fetch() {
    this.httpService.get('categories/').subscribe((items) => {
      this.categories = items || [];
    }, (err) => { })
  }
}
