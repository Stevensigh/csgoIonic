import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfernoPage } from './inferno';

@NgModule({
  declarations: [
    InfernoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfernoPage),
  ],
})
export class InfernoPageModule {}
