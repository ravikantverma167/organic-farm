import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'organic-farm-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

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
      console.log(items);
      this.categories = items || [];
    }, (err) => { })
  }

}
