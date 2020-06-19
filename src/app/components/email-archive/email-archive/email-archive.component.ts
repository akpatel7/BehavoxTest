import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { OrderPipe } from 'ngx-order-pipe';

import { Email } from '../../../models/email';
import { EmailService } from '../../../services/email/email.service';

@Component({
  selector: 'app-email-archive',
  templateUrl: './email-archive.component.html',
  styleUrls: ['./email-archive.component.css']
})
export class EmailArchiveComponent implements OnInit {
  // collection to hold sorted emails
  emailCollection: Email[];
  // filter
  customFilter: string;
  // sorting
  order = 'date'; // set default
  // chevron direction on columns
  reverseNames = true;
  reverseDates = true;
  // sorting case-sensitivity
  isCaseInsensitive: boolean;
  comparator: (itemA: string, itemB: string) => number;

  constructor(private emailService: EmailService, private orderPipe: OrderPipe) {
  }

  ngOnInit(): void {
    // const emailData = from(this.emailService.getEmails());
    from(this.emailService.getEmails()).subscribe(emails => {
      this.emailCollection = this.orderPipe.transform(emails, this.order, this.reverseDates, this.isCaseInsensitive, this.comparator);
      this.emailCollection = emails;
    });
  }

  reOrder(key: string, comparator: (itemA: string, itemB: string) => number, reverse: boolean) {
    this.comparator = this.emailService.customEmailNameComparator;
    this.emailCollection = this.orderPipe.transform(
      this.emailCollection,
      key,
      reverse,
      this.isCaseInsensitive,
      comparator);
  }

  setOrder(key: string) {
    if (key === 'fullname') {
      this.order = 'fullname';
      this.reverseNames = !this.reverseNames;
      this.reverseDates = false;
      this.reOrder(key, this.emailService.customEmailNameComparator, this.reverseNames);
    }
    if (key === 'date') {
      this.order = 'date';
      this.reverseDates = !this.reverseDates;
      this.reverseNames = true;
      this.reOrder(key, this.emailService.customEmailDateComparator, this.reverseDates);
    }
  }

  customFilterUpdate(key: string) {
    this.customFilter = key;
  }
}

