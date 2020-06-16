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
  reverse: boolean;
  // pagination page
  page: number;
  // collection to hold sorted emails
  sortedCollection: any[];

  customComparator: (a: string, b: string) => number;

  constructor(private emailService: EmailService, private orderPipe: OrderPipe) {
    // set defaults
    this.customFilter = '';
    this.order = 'name';
    this.reverse = false;
    this.page = 1;
    this.orderPipe = orderPipe;
    this.customComparator = this.emailService.customEmailNameComparator;
  }

  ngOnInit(): void {
    this.getEmails();
  }

  getEmails(): void {
    const emailData = from(this.emailService.getEmails());
    emailData.subscribe(emails => {
      this.sortedCollection = this.orderPipe.transform(emails, 'name');
      console.log(this.sortedCollection);
    });
  }


  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
