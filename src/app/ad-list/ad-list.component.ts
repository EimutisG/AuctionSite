import { Component, OnInit } from '@angular/core';
import { AdDetails } from '../ad-details/ad-details.model';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  //constructor() { }

  Adds : AdDetails[];
  
    constructor() {
      this.Adds = [
        new AdDetails('123', 'Ice Age', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','$35'),
        new AdDetails('234', 'Sherk', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','$43'),
        new AdDetails('345', 'Madagascar', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','$39')
      ];
     }

  ngOnInit() {
  }

}
