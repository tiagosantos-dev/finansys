import { Component, OnInit, Input } from '@angular/core';

import { faFolder } from '@fortawesome/free-solid-svg-icons';

import {  FolderService} from '../folder/shared/folder.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  faFolder = faFolder;
  @Input()  folders = []
  constructor(private folderService :FolderService) { }

  ngOnInit(): void {
    
  }

}
