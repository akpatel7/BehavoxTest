import { Injectable } from '@angular/core';

import { Email } from '../../models/email';
import { EMAILS } from './mocks/mock-emails-short';
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
        return itemA > itemB ? 1 : -1;
    }

    customEmailDateComparator(itemA: string, itemB: string): number {
        return itemA > itemB ? 1 : -1;
    }
}
