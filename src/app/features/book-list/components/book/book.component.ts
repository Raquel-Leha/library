import { Component, EventEmitter, Output, Input} from '@angular/core';
import { BookI } from 'src/app/core/services/book.models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() public bookInfo?: BookI;

  @Output() public onSelectBook: EventEmitter<BookI> = new EventEmitter();
  @Output() public onDeleteBook: EventEmitter<BookI> = new EventEmitter();

  public selectBook(){
    this.onSelectBook.emit(this.bookInfo);
  }

  public deleteBook(event: Event){
    event.preventDefault();
    event.stopPropagation();
    this.onDeleteBook.emit(this.bookInfo);
  }

}
