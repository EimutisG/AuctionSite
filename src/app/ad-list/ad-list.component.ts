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

  // public searchBool: boolean = false;
  // public validMovie: boolean = false;
  // Movies: Movie[];
  // film: Movie;
  // errorMessage: string;
  // movieID: string;


  // Array of adds
  Adds: AdDetails[];

    // Contructor with an array populated with imdbIDs and prices for adds
    constructor(private _movieService: MovieService) {

       // blade runner 1982 tt0083658, blade runner 2017 tt1856101
      this.Adds = [
        new AdDetails('tt1856101','$39'),
        new AdDetails('tt0083658','$45')
      ];
      //this.getMovieDetails();
     }

    //--------------------------------------------------------------------------
    // Code used for experimenting with omdb api, trying to push imdb ids stored
    // in Adds array in order to retreive movie details. Unfortunately didn't 
    // work as planned.
    //--------------------------------------------------------------------------

    //  findMovieStart(id){
    //   this.movieID = id;
    //   let self = this;  
  
    //   if(this.movieID != "") {
    //     self._movieService.getMovieID(this.movieID).subscribe(response => this.film = response, error => this.errorMessage = <any> error);    
    //     this.searchBool = true;
    //     this.validMovie = true;
    //     //this.Movies.push();
    //   }
    //   else
    //     console.log("No movie!");
    // }

    // getMovieDetails(){
    //   this.Adds.forEach(element => {
    //     console.log("Movie searched ==> " + element.movieID);
    //     this.findMovieStart(element.movieID);
    //   });
    // }
  

  ngOnInit() {
    
  }

}
