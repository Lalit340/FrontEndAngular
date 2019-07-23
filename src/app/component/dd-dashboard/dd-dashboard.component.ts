import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dd-dashboard',
  templateUrl: './dd-dashboard.component.html',
  styleUrls: ['./dd-dashboard.component.scss']
})
export class DdDashboardComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
