import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBooksRoutingModule } from './my-books-routing.module';
import { MyBooksComponent } from './my-books.component';
import { BoComponent } from './compo/book/bo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyBooksComponent,
    BoComponent
  ],
  imports: [
    CommonModule,
    MyBooksRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    MyBooksComponent
  ]
})
export class MyBooksModule { }
