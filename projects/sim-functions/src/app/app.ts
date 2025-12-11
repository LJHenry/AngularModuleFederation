import { Component, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { SimState } from '../../sim-state.enum';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonToggleModule,
    MatDividerModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sim-functions');
  currentSimState = signal(SimState.Stopped)

  freezeToggle = viewChild<ElementRef>("freezeToggle");

  frozenDisabled = true;

  onStopClick() : void{
    this.currentSimState.set(SimState.Stopped);
    this.frozenDisabled = true;
  }

  onPlayClick() : void{
    this.currentSimState.set(SimState.Running);
    this.frozenDisabled = false;
  }

    onFreezeClick() : void{
    this.currentSimState.set(SimState.Frozen);
  }

}
