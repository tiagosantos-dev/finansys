import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {HttpClientModule  } from '@angular/common/http'
// import {ReactiveFormsModule } from '@angular/forms'

import {  AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesModule } from './pages/categories/categories.module'
import {  EntriesModule } from './pages/entries/entries.module';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component'
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { httpInterceptorProviders } from './http-interceptors/index'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CategoriesModule,
    EntriesModule,
    FontAwesomeModule,
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue:"pt-BR"},
    httpInterceptorProviders

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
