import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverpassPage } from './overpass';

@NgModule({
  declarations: [
    OverpassPage,
  ],
  imports: [
    IonicPageModule.forChild(OverpassPage),
  ],
})
export class OverpassPageModule {}
