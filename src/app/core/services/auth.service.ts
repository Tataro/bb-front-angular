import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  verifyToken(): Observable<boolean> {
    // TODO: Mock validation with backend, replace with actual API call
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.tokenKey);
      return of(!!token);
    }
    return of(false);
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
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.tokenKey);
      // Assuming token contains the email in payload, otherwise, decode it here.
      return token ? 'user@example.com' : null;
    }

    return null;
  }
}
