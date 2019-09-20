import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule //ionicmodule import fo using ionic components
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
