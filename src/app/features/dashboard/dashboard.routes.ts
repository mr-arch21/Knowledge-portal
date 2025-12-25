import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { DashboardResolver } from './pages/dashboard/dashboard.resolver';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    resolve: {
         dashboard: DashboardResolver
     }
  }
];
