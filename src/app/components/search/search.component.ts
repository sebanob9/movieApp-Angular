import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = "";
  movies: any[] = [];
 /*  movies2 = this.movies[0].results; NO!!! */

  constructor(public _ms: MoviesService, public route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      if (param['text']) {
        this.search = param['text'];
        this.searchMovie();
      }
      console.log('es',param['text'])});
  }

  ngOnInit() {
  }

   
searchMovie() {
if (this.search.length === 0) {
  return;
}
this._ms.searchMovie(this.search)
  .subscribe(data => {
    console.log(data)
  });
}


}
