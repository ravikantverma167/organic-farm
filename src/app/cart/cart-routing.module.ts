import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
