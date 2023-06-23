import { BookService } from '../../core/services/bookServices/book.service';
import {
  BookI
} from '../../core/services/bookServices/book.models';
import { Component, OnInit } from '@angular/core';
import { NUM_BOOKS_PAGE } from 'src/app/shared/pipes/pagination/pagination.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public originalBooks: BookI[] = [];
  public counter = 0;
  public filterValue: string = '';
  public currentPage: number = 1;
  public maxPage: number = 1;
  

  constructor(private bookService: BookService) {}

  public ngOnInit(): void {
    this.getBooks();
  }


  public changePage(page: number) {
    this.currentPage = page;
  }

  private getBooks() {
    this.bookService.getBooks().subscribe((books: BookI[]) => {
      this.originalBooks = books;
      console.log(this.originalBooks);
      this.maxPage = this.originalBooks.length / NUM_BOOKS_PAGE;
    });
  }
}
