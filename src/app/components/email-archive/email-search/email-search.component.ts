import { Component } from '@angular/core';

@Component({
  selector: 'app-email-search',
  templateUrl: './email-search.component.html',
  styleUrls: ['./email-search.component.css']
})
export class EmailSearchComponent {

  // filter
  customFilter: string;

  constructor() {
    this.customFilter = '';
  }
}
