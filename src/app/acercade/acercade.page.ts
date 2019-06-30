import { Component, OnInit } from '@angular/core';
import {AlertController,ActionSheetController} from '@ionic/angular';

import { MenuController} from '@ionic/angular';
@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {
  calif:any;
  constructor(public alertCrtl : AlertController,
    public actionSheetController: ActionSheetController,
    private menuCtrl:MenuController) { }
  
  ngOnInit() {
  }

  async presentActionSheet1() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Marcelo Andres Bustos Tapia',
      buttons: [{
        text: 'Marcelo.bustos.xtr@gmail.com',
        role: 'email',
        icon: 'mail',
      }, {
        text: '+56973771292',
        icon: 'phone-portrait',
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentActionSheet2() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Leonardo Luis Hernandez Flores',
      buttons: [{
        text: 'leonardohernan96@gmail.com',
        role: 'email',
        icon: 'mail',
      }, {
        text: '+56942129272',
        icon: 'phone-portrait',
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentActionSheet3() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Joseph Fernando Jimenez Lopez',
      buttons: [{
        text: 'lopez.fernando.joseph@gmail.com',
        role: 'email',
        icon: 'mail',
      }, {
        text: '+569776841292',
        icon: 'phone-portrait',
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  
 async calift(){
   let nota= this.calif;
   if(nota="buena"){
     const alerta=await this.alertCrtl.create({
       header:'Gracias por calificarnos',
       message:'tu calificacion fue:'+this.calif,
       buttons:['continuar']
     });
     alerta.present();
    }else if(nota="regular"){
      const alerta=await this.alertCrtl.create({
        header:'Gracias por calificarnos',
        message:'tu calificacion fue:'+this.calif,
        buttons:['continuar']
      });
      alerta.present();
     }else if(nota="mala"){
      const alerta=await this.alertCrtl.create({
        header:'Gracias por calificarnos',
        message:'tu calificacion fue:'+this.calif,
        buttons:['continuar']
      });
      alerta.present();
     }else{
      const alerta=await this.alertCrtl.create({
        header:'Seleciona una opcion',
        buttons:['continuar']
      });
      alerta.present();
    

    }}
    toggleMenu(){
      this.menuCtrl.toggle();
        }
}