import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  movie: any;
  goBack: string = '';
  currentSearch: string = '';

  constructor(private _ms: MoviesService, public route: ActivatedRoute) {
    this.route.params.subscribe(param => {
        console.log(param);
        this.goBack = param.page

        if (param.search) {
          this.currentSearch = param.search;
        }

        this._ms.getMovie(param.id).subscribe(movie => {
            this.movie = movie;
            console.log(movie);
          })
        });
  }

  ngOnInit() {
  }

}
