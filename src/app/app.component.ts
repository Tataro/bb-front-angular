import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showNavbar = true;
  userEmail: string | null = null;
  isLoading = true;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = !this.router.url.includes('/login');
      this.userEmail = this.authService.getUserEmail();
      this.isLoading = false;
    });
  }
}
