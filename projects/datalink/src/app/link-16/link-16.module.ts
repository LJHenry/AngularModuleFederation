import { NgModule } from "@angular/core";
import { Link16 } from "./link-16";
import { RouterModule } from "@angular/router";
import { LINK_16_ROUTES } from './link-16.routes';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    Link16
  ],
  imports: [
    RouterModule.forChild(LINK_16_ROUTES),
    MatTableModule
  ]
})
export class Link16Module { }