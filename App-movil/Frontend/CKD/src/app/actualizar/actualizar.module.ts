import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPageRotuingModule } from './actualizar-routing.module';

import { ActualizarComponent } from './actualizar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPageRotuingModule
  ],
  declarations: [ActualizarComponent]
})
export class ActualizarPageModule {}