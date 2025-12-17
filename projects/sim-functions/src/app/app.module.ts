import { NgModule } from "@angular/core";
import { AppComponent } from './app';
import { RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { SimControlsModule } from "./sim-controls/sim-controls.module";
import {routes} from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SimControlsModule,
    RouterOutlet
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }