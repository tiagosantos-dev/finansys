import { Component, OnInit, OnDestroy } from '@angular/core';

import { CategoryService  } from '../shared/category.service'
import { Subscription } from 'rxjs'
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  subscription : Subscription;
  constructor(private service : CategoryService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((e)=> this.categories = e);
 
  }
  

  deleteCategory(category : Category){
    const mustDelete = confirm(`Deseja realmente excluir a categoria ${category.name}`)
    if(mustDelete){
      this.subscription = this.service.delete(category.id)
      .subscribe(e => this.categories = this.categories.filter((element)=> element !== category),
      () => alert("Error ao tentar excluir") )
    }
    

  }
  updateCategory(category){
    console.log(category)


  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();

  // }
}
