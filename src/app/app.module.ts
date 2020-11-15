import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  AppRoutingModule} from './app-routing.module';
import { CategoriesModule } from './pages/categories/categories.module'
import { RouterModule } from '@angular/router'

import {HttpClientModule  } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDatabase} from './in-memory-database';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CategoriesModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
