import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { UpcomingProvider } from "../../providers/upcoming/upcoming";
import { DetailsPage } from "../details/details";

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  movies: Observable<any>;
  page = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,public upcoming: UpcomingProvider) {
    this.movies = this.upcoming.getUpcoming(this.page);
    
  }

  itemSelected(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

}
