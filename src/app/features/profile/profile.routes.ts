import { Routes } from '@angular/router';
import { Profile } from './profile';
import { profileResolver } from './profile.resolver';
import { ProfileForm } from '../profile-form/profile-form';
export const PROFILE_ROUTES:Routes=[
    {
        path:'',
        component:Profile,
        resolve: {
            profile: profileResolver
        }
    },{
        path:'form',
        component:ProfileForm,
    }
]