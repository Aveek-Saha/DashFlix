import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NowPlayingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NowPlayingProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NowPlayingProvider Provider');
  }

  getNowPlaying(page) {
    console.log(page)
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3580bf75aaa90303fa62f491cfec60b9&language=en-US&page=' + Number(page));
  }

}
