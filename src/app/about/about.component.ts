import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  year = (new Date()).getFullYear();
  month = (new Date()).getMonth();
  day = (new Date()).getDay();
  age = 0;

  constructor() {
    this.calAge();
  }
  calAge() {
    var timeDiff = Math.abs(Date.now() - Date.UTC(97, 5, 26));
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  ngOnInit(): void {
  }

}
