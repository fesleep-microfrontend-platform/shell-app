import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'contact',
            loadComponent: () => 
                loadRemoteModule('contact', './Contact')
                    .then(m => m.Contact)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            loadRemoteModule('dashboard', './Dashboard')
                .then(m => m.Dashboard)
    },
];