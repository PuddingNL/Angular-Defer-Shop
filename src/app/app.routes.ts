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
        path: 'products-click', 
        loadComponent: () =>
            import('./products-click/products-click.component').then(
            (h) => h.ProductsComponentClick
        ),
    }
];
