import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarPersonaPage } from './actualizar-persona.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPersonaPageRoutingModule {}
