import { Component } from '@angular/core';

import decode from 'jwt-decode';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  vacio:Boolean=false;
  testRes: any;
  constructor(public service: TestService, public router : Router){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    let usrInfo = decode(localStorage.getItem('token'));
    console.log(usrInfo);
    this.obtenerTest(usrInfo.usuario._id);
  }

  obtenerTest(id:any) {
    this.service.obtenerTest(id).then((resp: any) => {
      console.log(resp);
      this.testRes = resp.resp;
      if(this.testRes.length < 1){
        console.log("arreglo vacio");
        this.vacio= true;
      }
    }).catch((err: any) => {
      console.log(err);
    });
  }
  realizarTest(){
    this.router.navigate(['/tabs/tab1']);
  }
}
