import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  hero = {
    name: 'lorem',
    id: 12
   };

  constructor() { }

  ngOnInit(): void {
  }

  returnFn() {}

}
