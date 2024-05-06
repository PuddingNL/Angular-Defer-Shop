import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsComponentHover } from './products-hover/products-hover.component';

export const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'products-hover', component: ProductsComponentHover}
];
