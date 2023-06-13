import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { BookComponent } from './components/book/book.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookListModule { }
