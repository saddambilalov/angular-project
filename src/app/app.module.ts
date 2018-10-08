import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from '../components/event.component';
import { PersonService } from '../services/person.service';
import { FileSizePipe } from '../pipes/filesize.pipe';
import { CounterComponent } from '../components/counter.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../user/login.component';
import { baseAppRoutes } from './baseapp.routes';
import { BaseAppComponent } from './baseapp.component';
import { UserDetails } from '../user/userdetails.component';
import { UserService } from '../services/user.service';
import { NavbarComponent } from './navbar.component';
import { TOASTR_TOKEN } from '../services/toaster.service';
import { FormValidationComponent } from '../components/formvalidation.component';
import { ReactiveValidationComponent } from '../components/reactivevalidation.component';

declare let toastr: any;

@NgModule({
  declarations: [
    BaseAppComponent,
    AppComponent,
    EventComponent,
    CounterComponent,
    LoginComponent,
    FormValidationComponent,
    ReactiveValidationComponent,
    NavbarComponent,
    UserDetails,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(baseAppRoutes)
  ],
  providers: [
    PersonService,
    UserService,
    { provide: TOASTR_TOKEN, useValue: toastr }
  ],
  bootstrap: [BaseAppComponent]
})
export class AppModule { }
