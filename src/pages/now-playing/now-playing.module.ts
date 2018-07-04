import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NowPlayingPage } from './now-playing';

@NgModule({
  declarations: [
    NowPlayingPage,
  ],
  imports: [
    IonicPageModule.forChild(NowPlayingPage),
  ],
})
export class NowPlayingPageModule {}
