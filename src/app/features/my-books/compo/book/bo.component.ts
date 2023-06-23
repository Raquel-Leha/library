import { Component, EventEmitter, Output, Input} from '@angular/core';
import { BookI } from 'src/app/core/services/bookServices/book.models';

@Component({
  selector: 'app-bo',
  templateUrl: './bo.component.html',
  styleUrls: ['./bo.component.scss']
})
export class BoComponent {

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
