import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {HttpClientModule  } from '@angular/common/http'
// import {ReactiveFormsModule } from '@angular/forms'

import {  AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesModule } from './pages/categories/categories.module'
import {  EntriesModule } from './pages/entries/entries.module'
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CategoriesModule,
    EntriesModule,
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue:"pt-BR"}

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
