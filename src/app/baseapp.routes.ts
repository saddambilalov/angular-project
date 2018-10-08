import { Routes } from '@angular/router';
import { LoginComponent } from '../user/login.component';
import { AppComponent } from './app.component';
import { UserDetails } from '../user/userdetails.component';
import { FormValidationComponent } from '../components/formvalidation.component';
import { ReactiveValidationComponent } from '../components/reactivevalidation.component';


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
    }, 
    {
        path: 'form',
        component: FormValidationComponent
    }, 
    {
        path: 'reactive',
        component: ReactiveValidationComponent
    }
]