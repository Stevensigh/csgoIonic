import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NukePage } from './nuke';

@NgModule({
  declarations: [
    NukePage,
  ],
  imports: [
    IonicPageModule.forChild(NukePage),
  ],
})
export class NukePageModule {}
