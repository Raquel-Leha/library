import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookRoutingModule } from './new-book-routing.module';
import { NewBookComponent } from './new-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NewBookComponent
  ],
  imports: [
    CommonModule,
    NewBookRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NewBookModule { }
