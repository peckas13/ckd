import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
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
  constructor( private router : Router) {}
  valid(){
    const tokenPayload = decode(localStorage.getItem('token'));
    this.Usuario = tokenPayload.usuario;
    console.log(this.Usuario);
  }
  actulizar(){
    this.router.navigate(['/actualizar']);
  }
}
