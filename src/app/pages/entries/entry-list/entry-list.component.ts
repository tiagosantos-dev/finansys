import { Component, OnInit, OnDestroy } from '@angular/core';

import { EntryService  } from '../shared/entry.service'
import { Subscription } from 'rxjs'
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];
  subscription : Subscription;
  constructor(private service : EntryService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((e)=> this.entries = e);
 
  }
  

  deleteEntry(entry : Entry){
    const mustDelete = confirm(`Deseja realmente excluir a categoria ${entry.name}`)
    if(mustDelete){
      this.subscription = this.service.delete(entry.id)
      .subscribe(e => this.entries = this.entries.filter((element)=> element !== entry),
      () => alert("Error ao tentar excluir") )
    }
    

  }
 
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();

  // }
}
