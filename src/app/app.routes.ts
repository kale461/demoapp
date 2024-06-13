import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'user-registration-page',
        component:UserRegistrationComponent
    },
    {
        path:'userprofile',
        component:UserprofileComponent
    }
];
