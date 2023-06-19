import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:4000/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any) {
    return this.http.post<any>(this.url + '/signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.url + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }



}
