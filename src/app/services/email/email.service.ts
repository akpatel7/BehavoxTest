import { Injectable } from '@angular/core';

import moment from 'moment';

import { Email } from '../../models/email';
import { EMAILS } from './mocks/mock-emails-short';
import { Name } from '../../models/name';
@Injectable({
  providedIn: 'root',
})
export class EmailService {

    getMockedEmails(): any[] {
        return EMAILS;
    }

    getEmails(): Promise<Email[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getMockedEmails()), 2000);
        });
    }

    customEmailNameComparator(itemA: string, itemB: string): number {
      const a = itemA.toString().trim();
      const b = itemB.toString().trim();
      const splitA = a.split(' ');
      const splitB = b.split(' ');
      const lastA = splitA[splitA.length - 1];
      const lastB = splitB[splitB.length - 1];

      if (lastA < lastB) {
        return -1;
      }
      if (lastA > lastB) {
        return 1;
      }
      if (lastA === lastB) {
        const firstA = splitA[0];
        const firstB = splitB[0];

        if (firstA < firstB){
          return -1;
        }
        if (firstA > firstB){
          return 1;
        }
      }
      return 0;
    }

    customEmailDateComparator(itemA: string, itemB: string): number {
       /*
        https://stackblitz.com/edit/typescript-6m7alk
        import moment from 'moment';

        var myArray = [{
          name: "Joe Blow",
          date: 'Wednesday, May 21, 2014 4:12 PM'
        }, {
          name: "Sam Snead",
          date: 'Wednesday, May 21, 2014 4:13 PM'
        },
        {
          name: "Sam Snead",
          date: 'Saturday, April 9, 2016 9:15 PM'
        },
        {
          name: "Sammy Snead",
          date: 'Saturday, April 9, 2020 9:15 PM'
        },
        {
          name: "John Smith",
          date: 'Thursday, May 14, 2020 11:23 AM'
        }];

        myArray.sort(function compare(a, b) {
          const dateA = moment(a.date);
          const dateB = moment(b.date);
          console.log(dateA, dateB, dateA.diff(dateB));
          return dateA.diff(dateB);
        });

        console.log(myArray);
       */
      const dateA = moment(itemA);
      const dateB = moment(itemB);
      console.log(dateA, dateB, dateA.diff(dateB));
      return dateA.diff(dateB);
    }
}
