import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookFormComponent } from './components/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    BookFormComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BookFormComponent,
    FilterPipe
  ]
})
export class SharedModule { }
