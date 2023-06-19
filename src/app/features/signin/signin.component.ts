import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authServices/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  
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

  signIn(){
    this.authService.signIn(this.user)
  .subscribe(
    res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['home']);
    },
    err => console.log(err)
  )
  }

}
