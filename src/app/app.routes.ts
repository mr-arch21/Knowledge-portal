import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/dashboard/dashboard.routes')
                .then(m => m.DASHBOARD_ROUTES)
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('./features/profile/profile.routes')
                .then(m => m.PROFILE_ROUTES)

    }
];
