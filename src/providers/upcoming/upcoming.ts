import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpcomingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpcomingProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UpcomingProvider Provider');
  }

  getUpcoming(page) {
    console.log(page)
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3580bf75aaa90303fa62f491cfec60b9&language=en-US&page=' + Number(page) + '&region=us');
  }

}
