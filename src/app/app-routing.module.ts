import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent, 
    children: [ // con esto se mantiene un mismo layout base para que se tenga la misma visualización, y solo se tengan que cambiar en un lugar cuando sea necesario
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // se genera la carga del modulo completo
      { path: 'products', loadChildren: () => import('./product/product.module').then( m => m.ProductModule ) },      
      { path: 'contact', canActivate: [AdminGuard], loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: 'demo', canActivate: [AdminGuard], loadChildren: () => import('./demo/demo.module').then( m => m.DemoModule ) }
    ]
  }, 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
