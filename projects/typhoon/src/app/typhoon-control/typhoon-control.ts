import { Component, ElementRef, signal, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typhoon',
  templateUrl: './typhoon-control.html',
  styleUrl: './typhoon-control.css',
  standalone: false
})
export class TyphoonControl {
  protected readonly title = signal('typhoon-control');

  // Labeled Slider
  formatLabel(value: number): string {
    return `${value + '%'}`;
  }
}