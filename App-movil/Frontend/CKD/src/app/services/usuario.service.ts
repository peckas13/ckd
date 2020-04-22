import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { UsuarioModel } from '../models/usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private url: string = `${environment.urlProd}usuario/`;

    constructor(private http: HttpClient) { }

    login(usuario: UsuarioModel) {
        return this.http.post(this.url + 'login', usuario).toPromise();
    }

    registrarUsuario(usuario: UsuarioModel) {
        return this.http.post(`${this.url}registrar`, usuario).toPromise();
    }
    actualizar(id,usuario : UsuarioModel){
        return this.http.put(`${this.url}actualizar/${id}`,usuario).toPromise();
    }
    obtenerId(id){
       return this.http.get(`${this.url}obtener/${id}`).toPromise();
    }
    obtener(){
        return this.http.get(`${this.url}obtener`).toPromise();
    }
    
    
}