import { Component, OnInit, Input } from '@angular/core';
import { AdDetails } from './ad-details.model';
//import { Input } from '@angular/core/src/metadata/directives';

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

  ngOnInit() {
  }

}
