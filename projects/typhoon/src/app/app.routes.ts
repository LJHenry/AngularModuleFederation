import { Routes } from '@angular/router';
import { TyphoonControl } from './typhoon-control/typhoon-control';
import { AppComponent } from './app';

export const routes: Routes = [
    { 
        path: '', 
        component: AppComponent, 
        pathMatch: 'full'
    },
    
    {
        path: 'typhoon-control',
        component: TyphoonControl
    }
];