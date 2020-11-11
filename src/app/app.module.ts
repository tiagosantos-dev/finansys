import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  AppRoutingModule} from './app-routing.module';
import { CategoriesModule } from './pages/categories/categories.module'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CategoriesModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
