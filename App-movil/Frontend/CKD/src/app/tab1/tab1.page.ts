import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import decode from 'jwt-decode';
import { UsuarioModel } from '../models/usuario';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
usuarios:any=[];
usuario:any=[];
rolUser:Boolean=false;
Admin:Boolean=false;
user:any=[];
strRol:any=[];
currentUserIfo: any;
modeloUsuario: UsuarioModel = new UsuarioModel();
  alertController: any;
  constructor(public service: UsuarioService, private fileChooser: FileChooser) { }
ngOnInit(){
  this.getUsers();
  let usrInfo = decode(localStorage.getItem('token'));
  this.user = usrInfo.usuario;
  console.log(this.user);
  if(this.user.strRol==="ADMIN"){
    this.Admin = true;
    this.getUsers();
    console.log("admin")
  }else if(this.user.strRol==="USER"){
    this.rolUser= true;
    console.log("user")
    document.getElementById('datosUsuario').style.display="none";
    document.getElementById('usuarioM').style.display="inline";
  }
}
chooseFile(){
  this.fileChooser.open()
  .then((uri) => {
   
  })
  .catch((e) =>{
    console.log(e)
  });
}

async presentAlert(mensaje: any) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Usted subio una imagen',
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
}
  test() {
    location.href = "/tabs/tab1/test";
  }
  alert(){
    alert("e");
  }
  getUsers(){
  this.service.obtener().then((resp:{usuarios})=>{
  this.usuarios= resp.usuarios;
  console.log(this.usuarios)
  }).catch((err:HttpErrorResponse)=>{
  console.log(err);
  })
  }
  getUsersById(id){
    document.getElementById('datosUsuario').style.display='none';
    document.getElementById('rol').style.display='inline';
    this.service.obtenerId(id).then((resp:{usuarios})=>{
    this.usuario=resp.usuarios;
    }).catch((err:HttpErrorResponse)=>{
    console.log(err);
    })
    }
    cancel(){
      setTimeout(()=>{    //<<<---    using ()=> syntax
        document.getElementById('datosUsuario').style.display='inline';
        document.getElementById('rol').style.display='none';
   }, 1000);
    }
  actualizarRol(id){
     this.strRol = {"strRol": "ADMIN"};
     this.service.actualizar(id,this.strRol).then((resp)=>{
         console.log(resp);
         this.getUsersById(id);
     }, (err:HttpErrorResponse)=>{
       console.log(err)
     })
  }
}
