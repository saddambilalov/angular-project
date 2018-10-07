import {Routes} from '@angular/router';
import { LoginComponent } from '../user/login.component';
import { AppComponent } from './app.component';
import { UserDetails } from '../user/userdetails.component';


export const baseAppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user/:id',
        component: UserDetails
    },
    {
        path: 'index',
        component: AppComponent
    }
]