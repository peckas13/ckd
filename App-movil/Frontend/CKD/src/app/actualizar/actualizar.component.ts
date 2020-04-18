import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from "../models/usuario";
import decode from 'jwt-decode';
import { UsuarioService } from "../services/usuario.service";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss'],
})
export class ActualizarComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  User:any=[];
  constructor(public router : Router, public alertController: AlertController, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUser()
  }
getUser(){
  const tokenPayload = decode(localStorage.getItem('token'));
  this.User =  tokenPayload.usuario;
}
return(){
  this.router.navigate(['/tabs/tab3']);
}
actualizar(){
  const tokenid = decode(localStorage.getItem('token'));
  this.usuarioService.actualizar(tokenid.usuario._id,this.usuario).then((resp: any) => {
    this.registroExitoso();
  }).catch((err) => {
    console.log(err);
    this.registroFallido();
  });
}
async registroFallido() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'El usuario no se ha podido actualizar',
    buttons: ['OK'],

  });
  await alert.present();
}
async registroExitoso() {
  localStorage.clear();
  const alert = await this.alertController.create({
    header: 'Bienvenido!',
    message: 'El usuario se actualizo con éxito',
    buttons: [
      {
        text: '¡Inicie sesion nuevamente',
        handler: () => {
          this.router.navigate(['/']);
        }
      }
    ]
  });
  await alert.present();
}
}
