import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';


import { NowPlayingProvider } from "../../providers/now-playing/now-playing";
import { DetailsPage } from "../details/details";

/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {

  movies: Observable<any>;
  page = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowPlaying: NowPlayingProvider) {

    this.movies = this.nowPlaying.getNowPlaying(this.page);
  }

  itemSelected(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }

}
