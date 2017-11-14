import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from './movie';
import {MovieService} from './movie.service';
import {IMovie} from './IMovie';

@Component({
  selector: 'app-place-ad-page',
  templateUrl: './place-ad-page.component.html',
  styleUrls: ['./place-ad-page.component.css'],
  providers: [MovieService]
})

export class PlaceAdPageComponent implements OnInit {
    title = 'Movie List';   
    film: Movie;
    errorMessage: string;
    movieName: string; 

    constructor(private _movieService: MovieService) {  
    }  

    findMovieStart(x){
      this.movieName = x;
      console.log("Movie Name ==> " + this.movieName);
      let self = this;  
      self._movieService.getMovies(this.movieName).subscribe(response => this.film = response, error => this.errorMessage = <any> error);  
    }

    ngOnInit(): void {   }  

}