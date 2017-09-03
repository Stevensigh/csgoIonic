import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

//CSGO MAPS
import { MiragePage } from '../pages/mirage/mirage';
import { CachePage } from '../pages/cache/cache';
import { TrainPage } from '../pages/train/train';
import { OverpassPage } from '../pages/overpass/overpass';
import { NukePage } from '../pages/nuke/nuke';
import { InfernoPage } from '../pages/inferno/inferno';
import { Dust2Page } from '../pages/dust2/dust2';
import { CobblestonePage } from '../pages/cobblestone/cobblestone';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cache', component: CachePage},
      { title: 'Cobblestone', component: CobblestonePage},
      { title: 'DustII', component: Dust2Page},
      { title: 'Inferno', component: InfernoPage},
      { title: 'Mirage', component: MiragePage},
      { title: 'Nuke', component: NukePage},
      { title: 'Overpass', component: OverpassPage},
      { title: 'Train', component: TrainPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
