import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user$: Observable<User | null>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }
}
