import { Component } from '@angular/core';

import decode from 'jwt-decode';
import { TestService } from '../services/test.service';
import {UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  vacio:Boolean=false;
  testRes: any;
  user:any=[];
  Admin:Boolean=false;
  User:Boolean=false;
  allUsers:any=[];
  array:any=[];
  constructor(public service: TestService, public router : Router, public userService : UsuarioService){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    let usrInfo = decode(localStorage.getItem('token'));
    this.obtenerTest(usrInfo.usuario._id);
    this.user = usrInfo.usuario;
    console.log(this.user);
    if(this.user.strRol==="ADMIN"){
      this.Admin = true;
      this.getUsers();
      console.log("admin")
    }else if(this.user.strRol==="USER"){
      this.user= true;
      console.log("user")
      document.getElementById('usuario').style.display="inline";
    }
  }

  obtenerTest(id:any) {
    this.service.obtenerTest(id).then((resp: any) => {
      this.testRes = resp.resp;
      console.log(this.testRes);
      if(this.testRes.length < 1){
        console.log("vacio")
        this.vacio= true;
      }
    }).catch((err: any) => {
      console.log(err);
    });
  }
  realizarTest(){
    this.router.navigate(['/tabs/tab1']);
  }
  getUsers(){
    this.service.obtener().then((resp:any)=>{
      this.allUsers= resp;
      console.log(this.allUsers);
    })
  }
  sendEmail(correo){
    console.log(correo);
    
  }
}
