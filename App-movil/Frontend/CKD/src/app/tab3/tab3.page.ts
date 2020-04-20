import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins,CameraResultType, CameraSource } from '@capacitor/core';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioModel } from '../models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  Usuario: any = [];
  photo: SafeResourceUrl;
  imageUrl: any;
  saveImg:any=[];
  imgUsuario:  UsuarioModel = new UsuarioModel();
 ngOnInit(){
   this.valid();
   const perfilPhoto = decode(localStorage.getItem('token'));
   this.photo = perfilPhoto.usuario.img;
 }
  constructor(public alertController: AlertController,private sanitizer: DomSanitizer, private router : Router, private service : UsuarioService ) {}
  valid(){
    const tokenPayload = decode(localStorage.getItem('token'));
    this.Usuario = tokenPayload.usuario;
    console.log(this.Usuario);
  }
  actulizar(){
    this.router.navigate(['/actualizar']);
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/'])
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
    this.saveImg = this.photo;
    /**actualizar foto**/
    const tokenPayload = decode(localStorage.getItem('token'));
   this.imgUsuario.img = this.saveImg.changingThisBreaksApplicationSecurity;
   console.log(this.imgUsuario);
    this.service.actualizar(tokenPayload.usuario._id, this.imgUsuario).then((resp)=>{
       console.log(resp);
       this.registroExitoso();
    }, (err:HttpErrorResponse)=>{
      console.log(err);
    })
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
