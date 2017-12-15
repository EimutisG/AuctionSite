import { Component, OnInit } from '@angular/core';
import { AdDetails } from '../ad-details/ad-details.model';
import {MovieService} from '../place-ad-page/movie.service';
import {Movie} from '../place-ad-page/movie';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css'],
  providers: [MovieService]
})
export class AdListComponent implements OnInit {

  Adds: AdDetails[];
  film: Movie;
  
  // blade runner 1982 tt0083658, blade runner 2017 tt1856101

    constructor(private _movieService: MovieService) {

      this.Adds = [
        new AdDetails('tt1856101','$39'),
        new AdDetails('tt0083658','$45')
      ];
     }

  ngOnInit() {
  }

}
