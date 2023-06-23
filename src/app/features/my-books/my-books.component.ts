
import { BookService } from '../../core/services/bookServices/book.service';
import { BookI } from '../../core/services/bookServices/book.models';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/core/services/authServices/auth.service';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent {
  
  public datos: string[] = [];
  public originalBooks: BookI[] = [];
  public orderBy: string = '0';
  public verSeleccion: string = '';
  public mail: string | null = '';
  
  

  constructor(
    private bookService: BookService,
    private authservice: AuthService
  ){}

  public ngOnInit(): void{
    this.datos = ["autor", "titulo"];
    this.getBooks();
  }




  public deleteBook(book: BookI) {
    this.bookService.deleteBook(book._id).subscribe(() => {
      this.getBooks();
    });
  }

 
  
  
  public capturar(){
    this.verSeleccion = this.orderBy;
    console.log(this.verSeleccion);
  }

  private getBooks() {
    this.mail = this.authservice.getEmail();
    this.bookService.getBooks().subscribe((books: BookI[]) => {
    this.originalBooks = books.filter(book => book.email === this.mail);
    
  });
}

  

}
