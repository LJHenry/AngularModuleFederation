import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: 'sim-controls',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'sim-functions',
                exposedModule: './SimModule'
            })
                .then(m => m.SimControlsModule).catch(err => console.error('Error loading SimControlsModule:', err))
    },

    {
        path: 'typhoon-control',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'typhoon',
                exposedModule: './TyphoonModule'
            })
                .then(m => m.TyphoonControlModule).catch(err => console.error('Error loading TyphoonControlModule:', err))
    },

    {
        path: 'link-16',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'datalink',
                exposedModule: './DatalinkModule'
            })
                .then(m => m.Link16Module).catch(err => console.error('Error loading Link16Module:', err))
    },
];
