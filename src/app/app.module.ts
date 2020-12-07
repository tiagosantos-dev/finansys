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
import { ReactiveFormsModule } from '@angular/forms';
// import { FolderFormComponent } from './components/folder-form/folder-form.component'
import { FolderService } from './components/folder/shared/folder.service';
import { EconomiesComponent } from './pages/economies/economies.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EconomiesModule } from './pages/economies/economies.module';
import { SettingsModule } from './pages/settings/settings.module';
import { AnalysisModule } from './pages/analysis/analysis.module';
import { EconomiesRoutingModule } from './pages/economies/economies.routing.module';
import { InitialComponent } from './pages/initial/initial.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    CreateAccountComponent,
    // FolderFormComponent,
    EconomiesComponent,
    AnalysisComponent,
    SettingsComponent,
    InitialComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    EconomiesRoutingModule,
    CategoriesModule,
    EntriesModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    EconomiesModule,
    SettingsModule,
    AnalysisModule,
    ChartModule
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue:"pt-BR"},
    FolderService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
