import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { EntryService  } from '../shared/entry.service'
import { Subscription } from 'rxjs'
import { Entry } from '../shared/entry.model';

import { faFolder } from '@fortawesome/free-solid-svg-icons';
import {  FolderService} from '../../../components/folder/shared/folder.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];
  faFolder =faFolder;
  subscription : Subscription;
  createFolder : boolean = false;
  folders = []
  constructor(private service : EntryService, private folderService: FolderService) { }

  ngOnInit( ): void {
    this.folderService.getAll().subscribe((data)=> {
      console.log(data)
      this.folders = data} )
    
 
  }
  

  deleteEntry(entry : Entry){
    const mustDelete = confirm(`Deseja realmente excluir a categoria ${entry.name}`)
    if(mustDelete){
      this.subscription = this.service.delete(entry.id)
      .subscribe(e => this.entries = this.entries.filter((element)=> element !== entry),
      () => alert("Error ao tentar excluir") )
    }
    

  }

  onCreateFolder(){
    this.createFolder = !this.createFolder


  }
 
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();

  // }
}
