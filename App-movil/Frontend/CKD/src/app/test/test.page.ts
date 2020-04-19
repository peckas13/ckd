import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { TestModel } from '../models/test';
import { AlertController } from '@ionic/angular';
import decode from 'jwt-decode';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  res: any;
  test: TestModel = new TestModel();
 

  constructor(public alertController: AlertController, private testService: TestService) { }

  async resultado() {
    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: `El resultado de su test es ${this.res}`,
      buttons: [
        {
          text: 'Finalizar',
          handler: () => {
            location.pathname = 'tabs/tab1';
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
   const tokenPayload = decode(localStorage.getItem('token'));
   this.test.idUsuario = tokenPayload.usuario._id;
  }

  testResultado() {
    this.testService.test(this.test).then((resp: any) => {
      this.res = resp.detDB.resultado;
      this.resultado();
    }).catch((err) => {
      console.log(err);
    });

  }

}
