import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PopularProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PopularProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PopularProvider Provider');
  }

  getPopular(page) {
    console.log(page)
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=3580bf75aaa90303fa62f491cfec60b9&language=en-US&page=' + Number(page));
  }

}
