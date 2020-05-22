import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input('movies') allMovies; // el primero es el que recibe, el segundo el nombre que le pongo dentro del componente
  @Input('title') moviesTitle;

  constructor() {
    this.allMovies;
   }

  ngOnInit() {
  }

}
