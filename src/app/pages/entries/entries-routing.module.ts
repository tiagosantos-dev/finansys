import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderFormComponent } from 'src/app/components/folder-form/folder-form.component';
import { SingleFolderComponent } from 'src/app/components/single-folder/single-folder.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';

const entriesRoutes: Routes = [
  {path:"", component: EntryListComponent},
  {path:"folder/new", component: FolderFormComponent },
  {path:"new/:id", component: EntryFormComponent},
  {path:"edit/:id", component: EntryFormComponent },
  {path:"folder/:id", component: SingleFolderComponent },
 


];

@NgModule({
  imports: [RouterModule.forChild(entriesRoutes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
