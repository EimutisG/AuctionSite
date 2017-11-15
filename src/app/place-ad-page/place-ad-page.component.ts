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

    selMovieTitle: string;
    selMovieID: string;

    constructor(private _movieService: MovieService) {  }  

    movieSelected(smt, id) {
      this.selMovieTitle = smt;
      this.selMovieID = id;
      console.log("Movie: " + this.selMovieTitle + " - imdbID: " + this.selMovieID);
    }

    findMovieStart(x){
      this.movieName = x;
      console.log("Movie searched ==> " + this.movieName);
      let self = this;  
      self._movieService.getMovies(this.movieName).subscribe(response => this.film = response, error => this.errorMessage = <any> error);  
    }

    ngOnInit(): void {   }  
}