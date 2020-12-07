import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    FontAwesomeModule,
  ]
})
export class CategoriesModule { }
