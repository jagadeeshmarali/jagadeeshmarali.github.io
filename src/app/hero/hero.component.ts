import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit ,AfterViewInit {

  @ViewChild('tw') typewriterElement;

  ngOnInit() {

   }
  ngAfterViewInit() {
    const target = this.typewriterElement.nativeElement

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',

    })

    writer
      .rest(500)
      .type(`Developer`)
      .rest(500)
      .clear()
      .rest(1000)
      .type('Freelancer')
      .rest(500)
      .clear()
      .rest(1000)
      .type('Traveller')
      .rest(1000)
      .start()
      
   }
}
