import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { PopularProvider } from "../../providers/popular/popular";
import { DetailsPage } from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Observable<any>;
  page = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popular: PopularProvider) {
    this.movies = this.popular.getPopular(this.page);
  }

  itemSelected(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }


}
