import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tldashboard',
  templateUrl: './tldashboard.component.html',
  styleUrls: ['./tldashboard.component.scss']
})
export class TLDashboardComponent implements OnInit {

  constructor(
    private router : Router ,
  ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
