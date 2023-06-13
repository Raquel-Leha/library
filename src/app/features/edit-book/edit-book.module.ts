import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBookRoutingModule } from './edit-book-routing.module';
import { EditBookComponent } from './edit-book.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditBookComponent
  ],
  imports: [
    CommonModule,
    EditBookRoutingModule,
    SharedModule
  ]
})
export class EditBookModule { }
