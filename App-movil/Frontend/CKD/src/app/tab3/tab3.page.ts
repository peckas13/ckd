import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';
import { UsuarioService } from "../services/usuario.service";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  Usuario:any=[];
 ngOnInit(){
   this.valid();
 }
  constructor(private service: UsuarioService) {}
  valid(){
    const tokenPayload = decode(localStorage.getItem('token'));
    this.Usuario = tokenPayload.usuario;
    console.log(this.Usuario);
  }
  actulizar(){
    location.pathname="/actualizar"
  }
}
