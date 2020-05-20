import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apikey: string = '9c81fd2c244b685eff15dc498e203745';
  private urlMovie: string = "https://api.themoviedb.org/3"

  constructor(private http : HttpClient) { }

  getNowPlaying() {
    let url = `${ this.urlMovie}/movie/now_playing?api_key=${this.apikey}&language=en-US&page=1`
    return this.http.get(url)
      .pipe(map(res => res));
  }

  getPopulars() {
    let url = `${ this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=en`
    /* let url2 = `${ this.urlMovie}/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1` */
    return this.http.get(url)
      .pipe(map(res => res));
  
  }

  buscarPelicula( text:string ){

    let url = `${ this.urlMovie }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.get( url )
        .pipe(map(res => res));
  }
}

