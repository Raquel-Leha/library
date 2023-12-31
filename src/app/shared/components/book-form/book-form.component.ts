import { BookService } from '../../../core/services/bookServices/book.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookITransformed } from 'src/app/core/services/bookServices/book.models';
import { AuthService } from 'src/app/core/services/authServices/auth.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit{

  @Input() public book?: BookITransformed;

  public bookForm?: FormGroup;
  

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private authservice: AuthService

  ){}

  public ngOnInit(): void {

    this.bookForm = this.fb.group({

      titulo: new FormControl(this.book?.titulo || '', [Validators.required]),
      autor: new FormControl(this.book?.autor || '', [Validators.required]),
      genero: new FormControl(this.book?.genero || '', [Validators.required]),
      subgenero: new FormControl(this.book?.subgenero || ''),
      sinopsis: new FormControl(this.book?.sinopsis || '', [Validators.required]),
      portada: new FormControl(this.book?.portada || '', [Validators.required]),
      fechaPublicacion: new FormControl(this.book?.fechaPublicacion || '', [Validators.required]),
      paginas: new FormControl(this.book?.paginas || '', [Validators.required]),
      copias: new FormControl(this.book?.copias || '', [Validators.required]),

    })
  }



public createBook(){

  
  
  if(this.bookForm?.valid){

    const mail = this.authservice.getEmail();

    const myBooks = {...this.bookForm.value, email: mail}
   

    const bookRequest = this.book
       ? this.bookService.editBook(this.book._id, this.bookForm.value)
       : this.bookService.addBook(myBooks);

       

    bookRequest.subscribe((book: BookITransformed) => {
      this.bookForm?.reset();
      const redirect: boolean = this.authservice.loggedIn();
      if(redirect){
        this.router.navigateByUrl('my-books');
      }else{
        this.router.navigateByUrl('book-list');
      }
      
    });
  }
}

};