import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBooksComponent } from './my-books.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MyBooksComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBooksRoutingModule { }
