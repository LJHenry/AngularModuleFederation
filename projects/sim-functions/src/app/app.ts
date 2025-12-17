import { Component, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RouterLink } from '@angular/router';
import { SimControlsModule } from './sim-controls/sim-controls.module';

@Component({
  selector: 'app-sim-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterModule,
    RouterLink,
    SimControlsModule
  ],
})
export class AppComponent { }
