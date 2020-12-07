import { Component, OnInit } from '@angular/core';

import {FolderService  } from '../folder/shared/folder.service'
import { Router } from '@angular/router'
import { mergeMap  } from 'rxjs/operators'
@Component({
  selector: 'app-folder-form',
  templateUrl: './folder-form.component.html',
  styleUrls: ['./folder-form.component.css']
})
export class FolderFormComponent implements OnInit {

  constructor(private folderService :FolderService,private route :Router) { }

  ngOnInit(): void {
  }

  public createPast(nameFolder){
    console.log(nameFolder)
    this.folderService.create({"name":nameFolder}).subscribe((e)=>{
      console.log(e)
      this.route.navigate(['/entries/folder', e.id],  {queryParams:{name:e.name}})


    })

 
  }

}
