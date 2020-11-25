import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list.component'
import { EntryFormComponent } from './entry-form/entry-form.component'
import { CalendarModule } from 'primeng/calendar';
import { NgxMaskModule, IConfig} from 'ngx-mask'


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    EntriesRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    CalendarModule,
  
    
  ]
})
export class EntriesModule { }
