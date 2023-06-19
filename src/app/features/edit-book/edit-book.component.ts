import { BookService } from '../../core/services/bookServices/book.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/core/services/bookServices/book.models';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent {

  public book?: BookI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  )
  {
    this.activatedRoute.params.subscribe((params) => {
      const idFromRoute = params['_id'];
      this.bookService.getBook(idFromRoute).subscribe((book: BookI) => {
        this.book = book;
      });
    });
  }



}
