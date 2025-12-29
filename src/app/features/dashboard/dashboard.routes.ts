import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { DashboardResolver } from './pages/dashboard/dashboard.resolver';
import { LoginForm } from '../login-form/login-form';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    resolve: {
         dashboard: DashboardResolver
     }
  },
  {
    path:'login',
    component:LoginForm,
  }
];
