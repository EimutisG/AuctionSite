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

  public searchBool: boolean = false;
  public validMovie: boolean = false;

  Adds: AdDetails[];
  Movies: Movie[];
  film: Movie;
  errorMessage: string;
  movieID: string;
  
  // blade runner 1982 tt0083658, blade runner 2017 tt1856101

    constructor(private _movieService: MovieService) {

      this.Adds = [
        new AdDetails('tt1856101','$39'),
        new AdDetails('tt0083658','$45')
      ];
      //this.getMovieDetails();
     }

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
