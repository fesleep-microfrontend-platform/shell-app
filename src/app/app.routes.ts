import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'contact',
            loadComponent: () => 
                loadRemoteModule('contact', './ContactHome')
                    .then(m => m.ContactHome)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            loadRemoteModule('dashboard', './Dashboard')
                .then(m => m.Dashboard)
    },
];