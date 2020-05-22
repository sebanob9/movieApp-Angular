import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apikey: string = '9c81fd2c244b685eff15dc498e203745';
  private urlMovie: string = "https://api.themoviedb.org/3"

  movies: any[] = [];

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

  getUpcoming() {
    let url = `${this.urlMovie}/movie/upcoming?api_key=${this.apikey}&language=en-US&page=1`
    return this.http.get(url)
      .pipe(map(res => res));
  }

  searchMovie( text:string ){
    let url = `${ this.urlMovie }/search/movie?api_key=${ this.apikey }&language=en-US&query=${ text }&page=1&include_adult=false`
    return this.http.get( url )
        .pipe(map((res:any) => this.movies = res.results));
  }

  getMovie( id: string) {
    let url = `${ this.urlMovie }/movie/${ id }?api_key=${ this.apikey }&language=en-US`;
    return this.http.get(url)
      .pipe(map(res => res));
  }
}



