import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { OrderPipe } from 'ngx-order-pipe';


// import { Email } from '../../models/email';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Email Archive Viewer';
  // filter
  customFilter: string;
  // sorting
  order: string; // set default
  // chevron direction on columns
  reverseNames: boolean;
  reverseDates: boolean;
  isCaseInsensitive: boolean;
  // pagination page
  page: number;
  // collection to hold sorted emails
  sortedCollection: any[];
  // compartor function to sort columns
  comparator: (itemA: string, itemB: string) => number;

  // TODO: make email table a child component
  constructor(private emailService: EmailService, private orderPipe: OrderPipe) {
    // set defaults
    this.customFilter = '';
    this.order = 'fullname';
    this.reverseNames = false;
    this.reverseDates = true;
    this.isCaseInsensitive = true;
    this.page = 1;
    this.orderPipe = orderPipe;
    this.comparator = this.emailService.customEmailNameComparator;
  }

  ngOnInit(): void {
    const emailData = from(this.emailService.getEmails());
    emailData.subscribe(emails => {
      this.sortedCollection = this.orderPipe.transform(emails, this.order, this.reverseNames, this.isCaseInsensitive, this.comparator);
      console.log('Recieved emails', this.sortedCollection);
    });
  }

  reOrder(key: string, comparator: (itemA: string, itemB: string) => number, reverse: boolean) {
    this.comparator = this.emailService.customEmailNameComparator;
    this.sortedCollection = this.orderPipe.transform(
      this.sortedCollection,
      key,
      reverse,
      this.isCaseInsensitive,
      comparator);
    console.log('reOrdered with key', key, ' reverse', reverse, this.sortedCollection);
  }

  setOrder(key: string) {
    if (key === 'fullname') {
      this.reverseNames = !this.reverseNames;
      this.reverseDates = false;
      this.reOrder(key, this.emailService.customEmailNameComparator, this.reverseNames);
    }
    if (key === 'date') {
      this.reverseDates = !this.reverseDates;
      this.reverseNames = true;
      this.reOrder(key, this.emailService.customEmailDateComparator, this.reverseDates);
    }
  }
}
