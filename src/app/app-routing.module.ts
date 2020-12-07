import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';
import { InitialComponent } from './pages/initial/initial.component';

const routes: Routes = [

  {
    path:'', 
    component: HomeComponent,
    children:[

      {path:"", component:InitialComponent},
      {path:"entries", loadChildren:"./pages/entries/entries.module#EntriesModule"},
      {path:"categories", loadChildren:"./pages/categories/categories.module#CategoriesModule"},
      {path:"economies", loadChildren:"./pages/economies/economies.module#EconomiesModule"},
      {path:"analysis", loadChildren:"./pages/analysis/analysis.module#AnalysisModule"},
      {path:"settings", loadChildren:"./pages/settings/settings.module#SettingsModule"},
    ],
    canActivate:[AuthGuard]
  },
   {
    path:'',
    component: AuthenticationComponent,
    children:[
       {path:'' , redirectTo:'login', pathMatch:'full'},
       {path:'login', component: LoginComponent},
       {path:'create-account', component: LoginComponent},
     ]

  }

    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
