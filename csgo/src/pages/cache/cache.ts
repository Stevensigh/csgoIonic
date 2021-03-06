import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheCtPage } from '../cacheMain/cache-ct/cache-ct';
import {CacheTPage } from '../cacheMain/cache-t/cache-t';
/**
 * Generated class for the CachePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cache',
  templateUrl: 'cache.html',
})
export class CachePage {

  cacheCTTab = CacheCtPage;
  cacheTTab = CacheTPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CachePage');
  }

}
