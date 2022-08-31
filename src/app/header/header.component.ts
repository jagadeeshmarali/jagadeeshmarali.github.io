import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeEl = 'home'
  constructor(private navService: NavService, private router: Router) {
    const currentPath = window.location.pathname.split('/')[1]
    if (currentPath !== '') {
      this.activeEl = currentPath
    }
  }
  scroll(id: string) {
    // TODO: figured out how to navigate on mobile
    this.activeEl = id
    if (this.router.url !== '/') {
      this.router.navigate([''])
      setTimeout(() => {
        this.navService.scroll(id)
        this.navService.target.next(null)
      }, 1000)
    } else {
      this.navService.scroll(id)
      this.navService.target.next(null)
    }
  }
  navigateTo(path: string) {
    this.activeEl = 'project';
    this.navService.scroll(path);
    this.router.navigate([path]);
    
    this.navService.target.next(null)
  }
}
