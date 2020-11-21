import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { CategoryService } from "../shared/category.service";
import {Category  } from "../shared/category.model";
import toastr from 'toastr';
 
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoryForm : FormGroup;
  pageTitle: string;
  serverErrorMessages: string[]= null;
  submittingForm: boolean = false;
  category: any = {};

  constructor(
    private categoryService : CategoryService,
    private route : ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
   
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  submitForm(){
    this.submittingForm = true;

    if(this.currentAction == 'new'){
      this.createCategory();

    }else{
      this.updateCategory();
    }

  }

  private createCategory(){
    // const category : Category = Object.assign(new Category(), this.categoryForm.value)
    const category :Category = this.categoryForm.value;
    this.categoryService.create(category)
    .subscribe( category => this.actionForSuccess(category), (error)=> this.actionForError(error))

  }

  actionForSuccess(category){
    toastr.success("Solicitacao Processada com sucesso!");

    // REDIRECT RELOAD COMPONENT PAGE
    // this.router.navigateByUrl("categories", {skipLocationChange: true})
    // .then((res)=> this.router.navigate(["categories", category.id, 'edit']))
    this.router.navigate(['/categories']);

  }

  actionForError(error){
    toastr.error("Ocorreu um erro ao processar sua solicitcao");

    this.submittingForm = false;

    if(error.status == 422){
      this.serverErrorMessages = JSON.parse(error._body).errors;

    }else{
      this.serverErrorMessages = ["Falha na comnucação com o servidor, por favor tente mais tarde"];

    }

  }

 private updateCategory(){
  const category : Category = this.categoryForm.value;
  this.categoryService.update(category).subscribe(e => e)
  this.router.navigate(['/categories']);

  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new"){
      this.currentAction = "new";
    }else{
      this.currentAction = "edit";

    }
  }
  private buildCategoryForm(){
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(5)]],

    });
  }
  private loadCategory(){
    if(this.currentAction == 'edit'){
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get('id'))))
          .subscribe(category =>{
            this.category = category
            this.categoryForm.patchValue(category); ///Coloca os valores do obj, no campos input
          }), 
          (error)=>{
            alert("Ocorreu um erro no servidor "+ error)

          }
    }
  }

  private setPageTitle(){
    if(this.currentAction == 'new'){
      this.pageTitle = "Cadastro de Nova Categoria"

    }else{
      this.pageTitle = `Editando a categoria ${this.category.name || ''}`

    }

  }

}
