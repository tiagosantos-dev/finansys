import { Component, OnInit } from '@angular/core';

import { EntryService } from '../entries/shared/entry.service'

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {


  data: any;
  entries?: any;
  dataMonth: Array<any> 
  constructor(private entryService: EntryService) { }


  ngOnInit(): void {

    this.entryService.getAll().subscribe((entries) => {
      this.entries = entries;
     
        this.resultMounth(entries);

    })

    this.loadData();
    
    
  }

  public update(event: Event) {

  }

  loadData() {
    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Julho', "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: 'First Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

  }
  public values =[]
  public resultMounth(entries) {
    for (let entry of entries) {
      let valores =+ entry.amount
      this.values.push({ month: entry.date.split('/')[1], value: entry.amount })
     
    }
   
    
  }

  
}
