import { NgModule } from "@angular/core";
import { TyphoonControl } from "./typhoon-control";
import { RouterModule } from "@angular/router";
import { TYPHOON_ROUTES } from './typhoon-control.routes';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
      TyphoonControl
    ],
    imports: [
    RouterModule.forChild(TYPHOON_ROUTES),
    MatDividerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
})
export class TyphoonControlModule {}