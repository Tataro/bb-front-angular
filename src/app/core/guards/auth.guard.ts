import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    return this.authService.verifyToken().pipe(
      map((isValid) => {
        const currentUrl =
          route.url.map((segment) => `/${segment.path}`).join('') || '/';
        // console.log('currentUrl', currentUrl);
        // console.log('isValid', isValid);

        if (isValid && currentUrl === '/login') {
          this.router.navigate(['/users']); // Redirect to /users if token is valid and on login page
          return false;
        }

        if (isValid) {
          return true; // Allow access if token is valid
        } else {
          if (currentUrl !== '/login') {
            this.router.navigate(['/login']); // Redirect to login if token is invalid
            return false;
          }
          return true;
        }
      })
    );
  }
}
