import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../services/usuario.service";
import { UsuarioModel } from "../models/usuario";
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins,CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {

  photo: SafeResourceUrl;
  imageUrl: any;
  usuario: UsuarioModel = new UsuarioModel();
  cuidades = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila de Zaragoza',
    'Colima',
    'CDMX',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'México',
    'Michoacán de Ocampo',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro Arteaga',
   'Quintana Roo',
    'San Luís Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz Llave',
    'Yucatán',
    'Zacatecas',
    'Otro...',
]
  constructor(private sanitizer: DomSanitizer,public alertController: AlertController, private usuarioService: UsuarioService, private router: Router) { }

  async registroExitoso() {
    const alert = await this.alertController.create({
      header: 'Bienvenido!',
      message: 'El usuario se ha creado con éxito',
      buttons: [
        {
          text: '¡Iniciar sesión!',
          handler: () => {
            this.router.navigate(['/']);
          }
        }
      ]
    });
    await alert.present();
  }

  async takePicture() {
      const image = await Plugins.Camera.getPhoto({
        width: 150,
        height: 150,
        quality: 100,
        allowEditing: false,
        saveToGallery: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
      console.log(this.photo);
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
  this.photo = '../../assets/icon/camera.png'
  }

  return() {
    this.router.navigate(['/']);
  }

  registrarUsuario(forma: NgForm) {
    this.usuarioService.registrarUsuario(this.usuario).then((resp: any) => {
      this.registroExitoso();
    }).catch((err) => {
      console.log(err);
      this.registroFallido();
    });

  }
  sendPhoto(){

  }

}
