import { Component, OnInit } from '@angular/core';

import { faHome, faListAlt, faWallet, faHandHoldingUsd, faDollarSign, faChartPie, faBars, faMoneyBillAlt, faPiggyBank, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faHome = faHome
  faListAlt = faListAlt
  faWallet = faWallet
  faHandHoldingUsd = faHandHoldingUsd
  faDollarSign = faDollarSign
  faMoneyBillAlt = faMoneyBillAlt
  faBars = faBars;
  faPiggyBank = faPiggyBank
  faSignOutAlt = faSignOutAlt
  faCog = faCog
  faChartPie = faChartPie 
  sidebarOFF : boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }


  onClickArrow(){
    console.log("arrow")
    this.sidebarOFF = !this.sidebarOFF ;

  }
}
