
import { BookService } from './../../core/services/book.service';
import { BookI, BookITransformed } from './../../core/services/book.models';
import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  public originalBooks: BookI[] = [];
  public counter = 0;
  public filterValue: string = '';

  constructor(
    private bookService: BookService
  ){}

  public ngOnInit(): void{
    this.getBooks();
  }

  public selectBook(book: BookI) {
    book.selected = !book.selected;
    this.counter = book.selected ? this.counter + 1 : this.counter - 1;
  }

  


  public deleteBook(book: BookI) {
    this.bookService.deleteBook(book._id).subscribe(() => {
      this.getBooks();
    });
  }



private getBooks() {
  this.bookService.getBooks().subscribe((books: BookI[]) => {
    this.originalBooks = books;
  });
}

}
