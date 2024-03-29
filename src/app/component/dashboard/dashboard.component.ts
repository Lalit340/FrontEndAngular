import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  reset(){
    this.router.navigate(['/reset'])
  }
}
