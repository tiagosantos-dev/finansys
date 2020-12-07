import { Component, OnInit, OnDestroy } from '@angular/core';

import { CategoryService  } from '../shared/category.service'
import { Subscription } from 'rxjs'
import { Category } from '../shared/category.model';

import { faEdit, faTrashAlt, faBarcode, faGlobe,faDollarSign } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})


export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  subscription : Subscription;

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faBarcode = faBarcode
  faGlobe =faGlobe
  faDollarSign = faDollarSign
  
  constructor(private service : CategoryService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((e)=> {
        console.log(e)

      this.categories = e});
 
  }
  

  deleteCategory(category : Category){
    const mustDelete = confirm(`Deseja realmente excluir a categoria ${category.name}`)
    if(mustDelete){
      this.subscription = this.service.delete(category.id)
      .subscribe(e => this.categories = this.categories.filter((element)=> element !== category),
      () => alert("Error ao tentar excluir") )
    }
    

  }
 
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();

  // }
}
