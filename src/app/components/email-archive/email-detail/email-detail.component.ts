import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Email } from '../../../models/email';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent {

  @Input() emails: Email[];
  // filter
  @Input() filter: string;
  // chevron direction on columns
  @Input() reverseNames: boolean;
  @Input() reverseDates: boolean;
  @Input() sortBy: string;
  @Output() sortOrderSelected = new EventEmitter<string>();

  // pagination start page
  page: number;
  // pagination total items per page
  totalItemsPerPage: number;
  // compartor function to sort columns

  constructor() {
    this.page = 1;
    this.totalItemsPerPage = 3;
  }

  setOrder(key: string): void {
    this.sortOrderSelected.emit(key);
  }
}
