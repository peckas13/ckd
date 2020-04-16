import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRotuingModule } from './registro-routing-module';

import { RegistrarComponent } from './registrar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRotuingModule
  ],
  declarations: [RegistrarComponent]
})
export class RegistroPageModule {}