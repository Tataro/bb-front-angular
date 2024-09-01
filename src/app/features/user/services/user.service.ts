import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  createUser(user: { name: string; email: string; password: string }) {
    this.users.push({ ...user, id: this.users.length + 1 });
  }
}
