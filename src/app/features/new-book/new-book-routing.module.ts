import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './new-book.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: NewBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBookRoutingModule { }
