import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app';
import { routes } from './app.routes';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDivider } from '@angular/material/divider';
import { MatTable } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatTabsModule,
    MatDivider,
    MatTable
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }