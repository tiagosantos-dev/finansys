import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {HttpClientModule  } from '@angular/common/http'
// import {ReactiveFormsModule } from '@angular/forms'

import {  AppRoutingModule} from './app-routing.module';
import { CategoriesModule } from './pages/categories/categories.module'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { AppComponent } from './app.component';
import {  EntriesModule } from './pages/entries/entries.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CategoriesModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
   // EntriesModule,
    // ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
