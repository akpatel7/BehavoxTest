import { Injectable } from '@angular/core';



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

        // Date format is date: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}'
        /*
          import moment from 'moment'
          import _ from 'lodash'
          const dateArray = [{date:"2018-05-11"},{date:"2018-05-12"},{date:"2018-05-10"}]
          const sortedArray = _.orderBy(array, (o: any) => {
            return moment(o.date.format('YYYYMMDD');
          }, ['asc']);
          console.log(sortedDates)
        */

        return itemA > itemB ? 1 : -1;
    }
}
