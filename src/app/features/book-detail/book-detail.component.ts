
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookI, BookITransformed } from 'src/app/core/services/book.models';
import { BookService } from 'src/app/core/services/book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  public book?: BookI;



    constructor(
      private activatedRoute: ActivatedRoute,
      private bookService: BookService,
    
    )
  
  {
    this.activatedRoute.params.subscribe((params) => {
      const idFromRoute = params['_id'];
      this.bookService.getBook(idFromRoute).subscribe((book: BookI) => {
        this.book = book;
      })
    })
   
}

}
