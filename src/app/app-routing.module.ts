import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { ContactComponent } from './contact/contact.component'
import { DemoComponent } from './demo/demo.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent, 
    children: [ // con esto se mantiene un mismo layout base para que se tenga la misma visualización, y solo se tengan que cambiar en un lugar cuando sea necesario
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // se genera la carga del modulo completo
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },    
  { path: 'demo', component: DemoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
