import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { authGuard, adminGuard } from '@fesleep-microfrontend-platform/shared-data-access';

export const routes: Routes = [
    {
        path: 'contact',
            loadComponent: () =>
                loadRemoteModule('contact', './Contact')
                    .then(m => m.Contact)
    },
    {
        path: 'dashboard',
        canActivate: [adminGuard],
        loadComponent: () =>
            loadRemoteModule('dashboard', './Dashboard')
                .then(m => m.Dashboard)
    },
    {
        path: 'login',
        loadComponent: () =>
            loadRemoteModule('auth', './Login')
                .then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () =>
            loadRemoteModule('auth', './Register')
                .then(m => m.Register)
    },
    {
        path: 'catalog',
        loadComponent: () =>
            loadRemoteModule('catalog', './ProductList')
                .then(m => m.ProductList)
    },
    {
        path: 'catalog/manage',
        canActivate: [adminGuard],
        loadComponent: () =>
            loadRemoteModule('catalog', './ProductManage')
                .then(m => m.ProductManage)
    },
    {
        path: 'catalog/cart',
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule('catalog', './Cart')
                .then(m => m.Cart)
    },
    {
        path: 'catalog/:id',
        loadComponent: () =>
            loadRemoteModule('catalog', './ProductDetail')
                .then(m => m.ProductDetail)
    },
    {
        path: 'orders',
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule('orders', './OrderList')
                .then(m => m.OrderList)
    },
    {
        path: 'orders/:id',
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule('orders', './OrderDetail')
                .then(m => m.OrderDetail)
    },
];
