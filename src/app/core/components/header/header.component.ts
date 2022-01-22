import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cart: Array<any> = [];
  utilitySubscription: Subscription;

  constructor(
    public authService: AuthService,
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
