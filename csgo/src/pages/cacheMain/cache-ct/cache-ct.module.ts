import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CacheCtPage } from './cache-ct';

@NgModule({
  declarations: [
    CacheCtPage,
  ],
  imports: [
    IonicPageModule.forChild(CacheCtPage),
  ],
})
export class CacheCtPageModule {}
