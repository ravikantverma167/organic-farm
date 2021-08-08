
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { OrganicFarmRoutingModule } from './organic-farm-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';

const components = [
  BannerComponent,
  ProductsComponent,
  CategoriesComponent
]

@NgModule({
  declarations: [
    HomeComponent 
  ],
  imports: [
    CommonModule,
    OrganicFarmRoutingModule
  ]
})
export class OrganicFarmModule { }
