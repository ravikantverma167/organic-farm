
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { OrganicFarmRoutingModule } from './organic-farm-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { BannerComponent } from './components/banner/banner.component';

const components = [
  ProductsComponent,
  CategoriesComponent,
  HomeComponent,
  BannerComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    OrganicFarmRoutingModule
  ],
  exports: [...components]
})
export class OrganicFarmModule { }
