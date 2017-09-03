import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { MiragePage } from '../pages/mirage/mirage';
import { CachePage } from '../pages/cache/cache';
import { TrainPage } from '../pages/train/train';
import { OverpassPage } from '../pages/overpass/overpass';
import { NukePage } from '../pages/nuke/nuke';
import { InfernoPage } from '../pages/inferno/inferno';
import { Dust2Page } from '../pages/dust2/dust2';
import { CobblestonePage } from '../pages/cobblestone/cobblestone';
import {CacheCtPage} from '../pages/cacheMain/cache-ct/cache-ct';
import { CacheTPage} from '../pages/cacheMain/cache-t/cache-t';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MiragePage,
    CachePage,
    CacheCtPage,
    CacheTPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MiragePage,
    CachePage,
    CacheCtPage,
    CacheTPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
