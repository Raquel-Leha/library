import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/authServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    
  ) { }

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;
    }
    window.alert("Acceso no permitido!");
    this.router.navigate(['/signin']);
    return false;

  }

}
