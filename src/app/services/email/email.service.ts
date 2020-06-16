import { Injectable } from '@angular/core';

import { Email } from '../../models/email';
import { EMAILS } from './mocks/mock-emails-short';

@Injectable()
export class EmailService {

    getMockedEmails(): any[] {
        return EMAILS;
    }

    getEmails(): Promise<Email[]> {
        return new Promise(resolve => {
            // Simulate server latency with 3 second delay
            setTimeout(() => resolve(this.getMockedEmails()), 3000);
        });
    }

    customEmailNameComparator(itemA: string, itemB: string): number {
        return itemA > itemB ? 1 : -1;
    }

    customEmailDateComparator(itemA: string, itemB: string): number {
        return itemA > itemB ? 1 : -1;
    }
}