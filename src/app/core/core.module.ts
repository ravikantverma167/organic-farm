import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

const components = [
  HeaderComponent,
  FooterComponent

]
@NgModule({
  declarations: [...components],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [...components]
})
export class CoreModule { }
