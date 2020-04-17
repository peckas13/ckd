import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { TestModel } from '../models/test';


@Injectable({
    providedIn: 'root'
})
export class TestService {

    private url: string = 'http://localhost:3000/deteccion/'

    constructor(private http: HttpClient) { }

    test(test: TestModel) {
        return this.http.post(`${this.url}test`, test).toPromise();
    }

}