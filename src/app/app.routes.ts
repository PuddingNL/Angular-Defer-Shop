import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsComponentHover } from './products-hover/products-hover.component';
import { MiscComponent } from './misc/misc.component';

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
