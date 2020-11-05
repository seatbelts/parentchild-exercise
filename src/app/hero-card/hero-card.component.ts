import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero;

  @Output() outputEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  returnFn() {
    this.outputEmitter.emit(this.hero.id);
  }

}
