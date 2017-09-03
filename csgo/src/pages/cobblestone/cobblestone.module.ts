import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CobblestonePage } from './cobblestone';

@NgModule({
  declarations: [
    CobblestonePage,
  ],
  imports: [
    IonicPageModule.forChild(CobblestonePage),
  ],
})
export class CobblestonePageModule {}
