import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./products/products.component').then(
            (p) => p.ProductsComponent
        ),
    },
    {
        path: 'products-hover', 
        loadComponent: () =>
            import('./products-hover/products-hover.component').then(
            (h) => h.ProductsComponentHover
        ),
    },
    {
        path: 'more', 
        loadComponent: () =>
            import('./misc/misc.component').then(
            (m) => m.MiscComponent
        ),
    }
];
