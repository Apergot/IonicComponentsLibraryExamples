import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],

})
export class AlertPage implements OnInit {
  
  titulo: string ='alert page';

  constructor(public alertCtrl: AlertController) {
  }

  ngOnInit() {
  }

  async presentInput(){
    const input = await this.alertCtrl.create({
      header: 'Cambiar titulo',
      subHeader: 'Intoduce titulo',
      inputs:[
        {
          name: 'title',
          placeholder: 'Introduce título',
          type: 'text'
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Botón cancelar');
          }
        },
        {
          text: 'OK',
          handler: (data) => {
            this.titulo = data.title;
            console.log('Botón OK', data);
          }
        },
      ]
    });
    await input.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Botón OK');
          }
        },
      ]
    });

    await alert.present();
  }
}
