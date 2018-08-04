import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  DATE = new Date();
  detailsVisible = false;
  clickLog = [];
  logDate;

  constructor() { 
    this.logDate = this.DATE.getDate();
  }

  ngOnInit() {
  }

  detailsVisibleInvert() {
    this.detailsVisible = (this.detailsVisible ? false : true);
  }
  timestampLog() {
    
    this.logDate = this.DATE.getDate();
    this.clickLog.push(this.logDate);
  }
}
