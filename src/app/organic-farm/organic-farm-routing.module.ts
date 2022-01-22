import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganicFarmRoutingModule { }
