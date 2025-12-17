import { NgModule } from "@angular/core";
import { SimControls } from "./sim-controls";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from "@angular/router";
import { SIM_CONTROL_ROUTES } from './sim-controls.routes'

@NgModule({
    declarations: [
      SimControls
    ],
    imports: [
    RouterModule.forChild(SIM_CONTROL_ROUTES),
    MatButtonToggleModule,
    MatDividerModule
  ],
})
export class SimControlsModule {}