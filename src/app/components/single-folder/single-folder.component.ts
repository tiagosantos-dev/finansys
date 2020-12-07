import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EntryService } from '../../pages/entries/shared/entry.service'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Entry } from '../../pages/entries/shared/entry.model'


@Component({
  selector: 'app-single-folder',
  templateUrl: './single-folder.component.html',
  styleUrls: ['./single-folder.component.css']
})
export class SingleFolderComponent implements OnInit {

  constructor(private route : ActivatedRoute, private entryService : EntryService) { }
  nameFolder : string;
  entries = []
  folder_id ;
  faDollarSign =faDollarSign
  lastEntry ;
  ngOnInit(): void {
    this.nameFolder = this.route.snapshot.queryParams['name'];
    console.log(this.route.snapshot.params["id"])
    this.folder_id = this.route.snapshot.params["id"]
    this.getAllByNameFolder(this.folder_id)
    
  }
  public getAllByNameFolder(id){
    this.entryService.getAllByFolder(id).subscribe((entries)=>{
      this.entries = entries
      this.lastEntry = entries[entries.length - 1]
    })
  }

  public flastEntry(){
    return this.entries[this.entries.length - 1]
  }

  deleteEntry(entry : Entry){
    const mustDelete = confirm(`Deseja realmente excluir a categoria ${entry.name}`)
    if(mustDelete){
      this.entryService.delete(entry.id)
      .subscribe(e => this.entries = this.entries.filter((element)=> element !== entry),
      () => alert("Error ao tentar excluir") )
    }
    

  }
}
