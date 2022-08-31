import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  year = (new Date()).getFullYear();
  month = (new Date()).getMonth();
  day = (new Date()).getDay();
  experience = 0;

  constructor() {
    this.calAge();
  }

  ngOnInit(): void {
  }
  calAge() {
    var timeDiff = Math.abs(Date.now() - Date.UTC(2019, 8, 19));
    this.experience = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

}
