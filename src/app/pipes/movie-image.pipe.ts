import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform( movie: any, poster:boolean = false ): any {
    let url = 'http://image.tmdb.org/t/p/w500'
  /*   if (poster = true) {
      return url + movie.poster_path;
    } */

    if (movie.backdrop_path) { // si existe esta imagen, la devolvemos..sino, devolvemos la otra imagen.. sino 'no_image'
      return url + movie.backdrop_path;
    } else {
      if (movie.poster_path) { 
        return url + movie.poster_path;
    } else {
      return 'assets/img/no_img.jpg'
    }
  }

}
}
