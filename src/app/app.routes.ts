import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/dashboard/dashboard.routes')
                .then(m => m.DASHBOARD_ROUTES)
    },
    {
        path: 'profile',
        canActivate: [authGuard],
        loadChildren: () =>
            import('./features/profile/profile.routes')
                .then(m => m.PROFILE_ROUTES)

    }
];
