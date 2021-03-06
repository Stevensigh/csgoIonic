import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheCtAPage } from '../cache-ct-a/cache-ct-a';
/**
 * Generated class for the CacheCtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cache-ct',
  templateUrl: 'cache-ct.html',
})
export class CacheCtPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  siteTapped($event, sites){
    this.navCtrl.push(CacheCtAPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CacheCtPage');
  }

  goASite() {
    this.navCtrl.push(CacheCtAPage);
  }

}
