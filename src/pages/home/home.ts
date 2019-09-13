import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscripPage } from '../inscrip/inscrip';
//import { ActufoPage } from '../actufo/actufo';
import { TabsPage } from '../tabs/tabs';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor (public navCtrl: NavController) {

  }

/* methode appelant la page inscrip*/
  onGotoinscription(){
    this.navCtrl.push(InscripPage);
  }

/* méthode pour la connexion*/
  login() {
    this.navCtrl.push(TabsPage);
  }


}
 
 
  