import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisRoutingModule } from './analysis.routing.module'
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    ChartModule
  ]
})
export class AnalysisModule { }
