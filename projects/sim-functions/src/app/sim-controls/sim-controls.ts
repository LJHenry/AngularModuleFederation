import { Component, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { SimState } from '../sim-state.enum';

@Component({
  selector: 'app-sim-controls',
  templateUrl: './sim-controls.html',
  styleUrl: './sim-controls.css',
  standalone: false
})
export class SimControls {
  protected readonly title = signal('sim-controls');
  currentSimState = signal(SimState.Stopped)

  freezeToggle = viewChild<ElementRef>("freezeToggle");

  frozenDisabled = true;

  onStopClick(): void {
    this.currentSimState.set(SimState.Stopped);
    this.frozenDisabled = true;
  }

  onPlayClick(): void {
    this.currentSimState.set(SimState.Running);
    this.frozenDisabled = false;
  }

  onFreezeClick(): void {
    this.currentSimState.set(SimState.Frozen);
  }

}