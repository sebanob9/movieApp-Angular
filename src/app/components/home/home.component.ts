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
  constructor(private _ms: MoviesService) {
    this._ms.getNowPlaying()
      .subscribe(data => {
        this.showTimes = data;
        this.shows = this.showTimes.results; // no se usa
      });
   }

  ngOnInit() {
  }

}
