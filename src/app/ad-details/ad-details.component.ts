import { Component, OnInit, Input } from '@angular/core';
import { AdDetails } from './ad-details.model';
import {MovieService} from '../place-ad-page/movie.service';
import {Movie} from '../place-ad-page/movie';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css'],
  host: {
    class: 'row'
  }
})
export class AdDetailsComponent implements OnInit {

  @Input() AdDetails: AdDetails;

  public searchBool: boolean = false;
  public validMovie: boolean = false;
  errorMessage: string;
  film: Movie;
  movieID: string;

  constructor(private _movieService: MovieService) {}

  findMovieStart(id){
    this.movieID = id;
    console.log("Movie searched ==> " + this.movieID);
    let self = this;  

    if(this.movieID != "") {
      self._movieService.getMovieID(this.movieID).subscribe(response => this.film = response, error => this.errorMessage = <any> error);    
      this.searchBool = true;
      this.validMovie = true;
    }
    else
      console.log("No movie!");
  }

  ngOnInit() {
  }

}
