import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

// import { Email } from '../../models/email';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmailService]
})
export class AppComponent implements OnInit {
  title: string = 'Email Archive Viewer';
  //filter
  customFilter: string;
  //sorting
  order: string; //set default
  //chevron direction on columns
  reverse: boolean;
  //pagination page
  page: number;
  //emails returned from email service API
  emails: any[] = [];
  //collection to hold sorted emails
  sortedCollection: any[];

  customComparator: (a: string, b: string) => number;

  constructor(private emailService: EmailService, private orderPipe: OrderPipe) {
    //set defaults
    this.customFilter = '';
    this.order = 'name';
    this.reverse = false;
    this.page = 1;
    this.customComparator = this.emailService.customEmailNameComparator;
    this.sortedCollection = orderPipe.transform(this.emailService.getMockedEmails(), 'name');
    console.log(this.sortedCollection);
  }

  getEmails(): void {
    // this.emailService.getEmails().then(emails => this.emails = emails);
  }

  ngOnInit(): void {
    this.getEmails();
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
