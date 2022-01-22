
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { OrganicFarmRoutingModule } from './organic-farm-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';


// Components

import { BannerComponent } from './pages/home/components/banner/banner.component';
import { HomeCategoriesComponent } from './pages/home/components/home-categories/home-categories.component';
import { HomeProductsComponent } from './pages/home/components/home-products/home-products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';

const components = [
  BannerComponent,
  HomeProductsComponent,
  HomeCategoriesComponent
]

const pages = [
  HomeComponent,
  ProductsComponent,
  ProductDetailComponent,
  CategoriesComponent,
  ContactUsComponent
]

@NgModule({
  declarations: [
    ...pages,
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrganicFarmRoutingModule
  ],
  exports: []
})
export class OrganicFarmModule { }
