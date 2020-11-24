import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list.component'
import { EntryFormComponent } from './entry-form/entry-form.component'

@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EntriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EntriesModule { }
