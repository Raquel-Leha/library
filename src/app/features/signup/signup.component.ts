import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authServices/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  public user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

ngOnInit(): void {
  
}

signUp(){
   this.authService.signUp(this.user)
   .subscribe(
    res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('email', res.email);
      this.router.navigate(['my-books']);

    },
    err => console.log(err)
   )
}

}
