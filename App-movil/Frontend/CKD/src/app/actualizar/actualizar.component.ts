import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from "../models/usuario";
import decode from 'jwt-decode';
import { UsuarioService } from "../services/usuario.service";
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss'],
})
export class ActualizarComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  User:any=[];
  constructor() { }

  ngOnInit() {
    this.getUser()
  }
getUser(){
  const tokenPayload = decode(localStorage.getItem('token'));
  this.User = tokenPayload.usuario;
}
return(){
  location.pathname="/tabs/tab3";
}
}
