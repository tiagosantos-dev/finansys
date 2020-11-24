import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { EntryService } from "../shared/entry.service";
import {Entry  } from "../shared/entry.model";
import toastr from 'toastr';
 
@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  entryForm : FormGroup;
  pageTitle: string;
  serverErrorMessages: string[]= null;
  submittingForm: boolean = false;
  entry: any = {};

  constructor(
    private entryService : EntryService,
    private route : ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildEntryForm();
    this.loadEntry();
   
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  submitForm(){
    this.submittingForm = true;

    if(this.currentAction == 'new'){
      this.createEntry();

    }else{
      this.updateEntry();
    }

  }

  private createEntry(){
    // const entry : Entry = Object.assign(new Entry(), this.entryForm.value)
    const entry :Entry = this.entryForm.value;
    this.entryService.create(entry)
    .subscribe( entry => this.actionForSuccess(entry), (error)=> this.actionForError(error))

  }

  actionForSuccess(entry){
    toastr.success("Solicitacao Processada com sucesso!");

    // REDIRECT RELOAD COMPONENT PAGE
    // this.router.navigateByUrl("entries", {skipLocationChange: true})
    // .then((res)=> this.router.navigate(["entries", entry.id, 'edit']))
    this.router.navigate(['/entries']);

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

 private updateEntry(){
  const entry : Entry = this.entryForm.value;
  this.entryService.update(entry).subscribe(e => e)
  this.router.navigate(['/entries']);

  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new"){
      this.currentAction = "new";
    }else{
      this.currentAction = "edit";

    }
  }
  private buildEntryForm(){
    this.entryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      type: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],

    });
  }
  private loadEntry(){
    if(this.currentAction == 'edit'){
      this.route.paramMap.pipe(
        switchMap(params => this.entryService.getById(+params.get('id'))))
          .subscribe(entry =>{
            this.entry = entry
            this.entryForm.patchValue(entry); ///Coloca os valores do obj, no campos input
          }), 
          (error)=>{
            alert("Ocorreu um erro no servidor "+ error)

          }
    }
  }

  private setPageTitle(){
    if(this.currentAction == 'new'){
      this.pageTitle = "Cadastro de Nova Entrada"

    }else{
      this.pageTitle = `Editando a entrada ${this.entry.name || ''}`

    }

  }

}
