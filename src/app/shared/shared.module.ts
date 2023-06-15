import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookFormComponent } from './components/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { OrderPipe } from './pipes/order/order.pipe';




@NgModule({
  declarations: [
    BookFormComponent,
    FilterPipe,
    PaginationPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BookFormComponent,
    FilterPipe,
    PaginationPipe,
    OrderPipe
  ]
})
export class SharedModule { }
