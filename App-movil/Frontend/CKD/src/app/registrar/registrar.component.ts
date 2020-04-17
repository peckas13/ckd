import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../services/usuario.service";
import { UsuarioModel } from "../models/usuario";
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();
  constructor(public alertController: AlertController, private usuarioService: UsuarioService) { }

  async registroExitoso() {
    const alert = await this.alertController.create({
      header: 'Bienvenido!',
      message: 'El usuario se ha creado con éxito',
      buttons: [
        {
          text: '¡Iniciar sesión!',
          handler: () => {
            location.href = "/";
          }
        }
      ]
    });
    await alert.present();
  }

  async registroFallido() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El usuario no se ha podido registrar',
      buttons: ['OK'],

    });
    await alert.present();
  }

  ngOnInit() {

  }

  return() {
    location.href = "/";
  }

  registrarUsuario(forma: NgForm) {
    this.usuarioService.registrarUsuario(this.usuario).then((resp: any) => {
      this.registroExitoso();
    }).catch((err) => {
      console.log(err);
      this.registroFallido();
    });

  }

}
