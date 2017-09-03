import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiragePage } from './mirage';

@NgModule({
  declarations: [
    MiragePage,
  ],
  imports: [
    IonicPageModule.forChild(MiragePage),
  ],
})
export class MiragePageModule {
  constructor(private navCtrl:IonicPageModule) {
    
      }
}
