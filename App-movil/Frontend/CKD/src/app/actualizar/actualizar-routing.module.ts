import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarComponent } from './actualizar.component';

const routes: Routes = [
  {
    path: '',
    component: ActualizarComponent,
    children:[
      {
        path:'registrar',
        redirectTo: '/registrar'
      }
    ]
  },  {
    path: 'actualizar-persona',
    loadChildren: () => import('./actualizar-persona/actualizar-persona.module').then( m => m.ActualizarPersonaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPageRotuingModule  {}