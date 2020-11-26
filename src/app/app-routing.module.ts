import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path:'', 
    component: HomeComponent,
    children:[
      {path:" ", loadChildren:"./pages/entries/entries.module#EntriesModule"},
      {path:"categories", loadChildren:"./pages/categories/categories.module#CategoriesModule"},
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
