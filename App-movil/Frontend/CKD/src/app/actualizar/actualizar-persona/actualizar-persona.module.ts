import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPersonaPageRoutingModule } from './actualizar-persona-routing.module';

import { ActualizarPersonaPage } from './actualizar-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPersonaPageRoutingModule
  ],
  declarations: [ActualizarPersonaPage]
})
export class ActualizarPersonaPageModule {}
