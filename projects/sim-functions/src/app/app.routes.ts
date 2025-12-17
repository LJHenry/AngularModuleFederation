import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { SimControls } from './sim-controls/sim-controls';

export const routes: Routes = [
    { 
        path: '', 
        component: AppComponent, 
        pathMatch: 'full'
    },

    {
      path: 'sim-controls',
      component: SimControls
    }
];
