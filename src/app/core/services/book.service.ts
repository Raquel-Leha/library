import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookI, BookITransformed } from './book.models';
import { Observable, pipe, map, filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class BookService {

  public url: string = 'http://localhost:4000/api/books/';

  constructor(private http: HttpClient) { }


 getBooks(): Observable<BookITransformed[]> {
  
    return this.http.get<BookI[]>(this.url).pipe(

      map((books: BookI[]) => {
        return books.map((book) => {
          delete book.createAt;
          delete book.selected;
          return book;
        
        });
      }),

      filter((books: BookITransformed[]) => {
        return books.length > 0;
      })
    )
 }

 deleteBook(_id: string): Observable<BookI> {
   return this.http.delete<BookI>(this.url + _id);
 }
 
 addBook(book:BookITransformed): Observable<BookITransformed> {
   return this.http.post<BookI>(this.url, book);

 }

 getBook(_id: string): Observable<BookI> {
   return this.http.get<BookI>(this.url + _id);
 }

 editBook( _id:string, book: BookITransformed): Observable<BookITransformed> {
   return this.http.put<BookI>(this.url + _id, book);

 }

}
