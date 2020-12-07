import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list.component'
import { EntryFormComponent } from './entry-form/entry-form.component'
import { CalendarModule } from 'primeng/calendar';
import { NgxMaskModule, IConfig} from 'ngx-mask'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FolderComponent } from '../../components/folder/folder.component'
import { SingleFolderComponent } from '../../components/single-folder/single-folder.component';
import { FolderFormComponent } from '../../components/folder-form/folder-form.component'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent,
    FolderComponent,
    SingleFolderComponent,
    FolderFormComponent,

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    EntriesRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    CalendarModule,
    FontAwesomeModule,
  
    
  ]
})
export class EntriesModule { }
