import { Routes } from '@angular/router';
import { LoginFormComponent } from './features/login/components/login-form/login-form.component';
import { UserManagementComponent } from './features/user/components/user-management/user-management.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'users',
    component: UserManagementComponent,
    canActivate: [AuthGuard],
  },
];
