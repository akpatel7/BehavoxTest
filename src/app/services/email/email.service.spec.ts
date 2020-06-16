import { TestBed } from '@angular/core/testing';
import { Email } from '../../models/email';
import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMockedEmails', () => {
    it('should get emails', () => {
      const data = service.getMockedEmails();
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
    });
  });

  describe('getEmails', () => {
    it('should get emails', async () => {
      const data = await service.getEmails();
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
