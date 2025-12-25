import { Routes } from '@angular/router';
import { Profile } from './profile';
import { profileResolver } from './profile.resolver';
export const PROFILE_ROUTES:Routes=[
    {
        path:'',
        component:Profile,
        resolve: {
            profile: profileResolver
        }
    }
]