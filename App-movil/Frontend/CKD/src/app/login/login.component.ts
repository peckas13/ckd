import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../services/usuario.service";
import { UsuarioModel } from "../models/usuario";
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  constructor(public alertController: AlertController, private service: UsuarioService, private router :Router) { }


  async error() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrectos.',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
    if(localStorage.getItem('token')!== null){
      this.router.navigate(['/tabs/tab1']);
    }
  }

  onLogin(form: NgForm) {
    this.service.login(this.usuario).then((usuario: any) => {
      form.reset();
      localStorage.setItem('token', usuario.token);
      window.location.pathname="/tabs/tab1";
    }).catch((err: any) => {
      console.log(err);
      this.error();
      form.resetForm();
    });
  }

  registrar() {
    this.router.navigate(['/registro']);
  }

}



