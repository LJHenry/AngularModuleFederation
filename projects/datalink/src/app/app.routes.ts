import { Routes } from '@angular/router';
import { Link16 } from './link-16/link-16';
import { AppComponent } from './app';

export const routes: Routes = [
    { 
        path: '', 
        component: AppComponent, 
        pathMatch: 'full'
    },
    
    {
        path: 'link-16',
        component: Link16
    }
];