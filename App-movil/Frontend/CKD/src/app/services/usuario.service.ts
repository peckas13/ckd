import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { UsuarioModel } from '../models/usuario';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private url: string = 'http://localhost:3000/usuario/'

    constructor(private http: HttpClient) { }

    login(usuario: UsuarioModel) {
        return this.http.post(this.url + 'login', usuario).toPromise();
    }

}