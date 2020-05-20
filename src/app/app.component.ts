import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _ms: MoviesService) {
    this._ms.getPopulars()
      .subscribe(data => console.log(data));
  }

  title = 'moviesApp';
}
