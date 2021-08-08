import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sections: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.sections = [{
      title: '1 order',
      description: '1 planted tree',
      icon:'fas fa-tree fa-3x text-success mb-4'
    },
    {
      title: 'Free shipping from',
      description: 'from $ 100',
      icon:'fas fa-shipping-fast fa-3x text-dark mb-4'
    },
    {
      title: 'Shipments',
      description: 'withour plastic',
      icon:'fas fa-box-open fa-3x text-dark mb-4'
    },
    {
      title: 'Permanent discounts',
      description: 'for points',
      icon:'fas fa-hand-holding-usd fa-3x text-dark mb-4'
    }]
  }

}
