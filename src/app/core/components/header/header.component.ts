import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cart: Array<any> = [];
  utilitySubscription: Subscription;

  constructor(
    private utilityService: UtilityService,
  ) {
    this.utilitySubscription = this.utilityService.getCart.subscribe(cart => {
      if (cart) {
        this.cart = cart;
      }
    });
  }

  ngOnInit(): void {
  }

  
  ngOnDestroy(): void {
    if (!!this.utilitySubscription) this.utilitySubscription.unsubscribe();
  }



}
