import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from './registrar.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarComponent,
    children:[
      {
        path:'registrar',
        redirectTo: '/registrar'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRotuingModule  {}