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
      const splitA = itemA.split(' ');
      const splitB = itemB.split(' ');
      const lastA = splitA[splitA.length - 1];
      const lastB = splitB[splitB.length - 1];

      if (lastA < lastB){
        return -1;
      }
      if (lastA > lastB){
        return 1;
      }
      return 0;
    }

    customEmailDateComparator(itemA: string, itemB: string): number {
        return itemA > itemB ? 1 : -1;
    }
}
