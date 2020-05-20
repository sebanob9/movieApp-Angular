import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private _ms: MoviesService) {
    this._ms.getNowPlaying()
      .subscribe(data => {
        console.log(data);
      });
   }

  ngOnInit() {
  }

}
