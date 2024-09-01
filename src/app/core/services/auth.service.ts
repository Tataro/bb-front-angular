import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(private router: Router) {}

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem(this.tokenKey);
    // console.log('token', !!token);
    // TODO: Mock validation with backend, replace with actual API call
    return of(!!token); // Assume it's valid if token exists
  }

  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getUserEmail(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    // console.log('token', token);
    // Assuming token contains the email in payload, otherwise, decode it here.
    return token ? 'user@example.com' : null;
  }
}
