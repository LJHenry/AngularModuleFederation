import { Component, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { Link16Service } from './link-16.service';

@Component({
  selector: 'app-datalink',
  templateUrl: './link-16.html',
  styleUrl: './link-16.css',
  standalone: false
})
export class Link16 {
  protected readonly title = signal('link-16');

  constructor(public service: Link16Service){}
}