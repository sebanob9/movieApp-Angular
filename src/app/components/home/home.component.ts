import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  showTimes: any;
  shows: any;

  allPopulars: any;
  populars: any;
  
  allUpcoming: any;
  upcoming: any;

  
  constructor(private _ms: MoviesService) {
    this._ms.getNowPlaying()
      .subscribe(data => {
        this.showTimes = data;
        this.shows = this.showTimes.results; // si envío el results directamente, me da error el pipe slice
      });

    this._ms.getPopulars()
      .subscribe(data => {
        this.allPopulars = data;
        this.populars = this.allPopulars.results;
      });

    this._ms.getUpcoming()
      .subscribe(data => {
        this.allUpcoming = data;
        this.upcoming = this.allUpcoming.results;
      });
   }

  ngOnInit() {
  }

}
