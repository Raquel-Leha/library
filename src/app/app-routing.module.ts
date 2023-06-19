import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './core/guards/authguard.guard';

const routes: Routes = [

{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
},
{
  path: 'signin',
  loadChildren: () => import('src/app/features/signin/signin.module').then(m => m.SigninModule)
},
{
  path: 'signup',
  loadChildren: () => import('src/app/features/signup/signup.module').then(m => m.SignupModule)
},
{
  path: 'my-books',
  loadChildren: () => import('src/app/features/my-books/my-books.module').then(m => m.MyBooksModule),
  canActivate: [AuthGuard]
},
{
  path: 'book-list',
  loadChildren:() => import('src/app/features/book-list/book-list.module').then(m => m.BookListModule)
},
{
  path: 'book-detail/:_id',
  loadChildren: () => import('src/app/features/book-detail/book-detail.module').then(m => m.BookDetailModule)
},
{
  path: 'new-book',
  loadChildren: () => import('src/app/features/new-book/new-book.module').then(m => m.NewBookModule)
},
{
  path: 'edit-book/:_id',
  loadChildren: () => import('src/app/features/edit-book/edit-book.module').then(m => m.EditBookModule)
},
{
  path: '**',
  loadChildren: () => import('src/app/features/not-found/not-found.module').then(m => m.NotFoundModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
