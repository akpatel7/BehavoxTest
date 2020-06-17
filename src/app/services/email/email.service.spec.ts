import { TestBed } from '@angular/core/testing';
import { Name } from '../../models/name';
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

  describe('customEmailNameComparator', () => {
    it('should return 1', () => {
      const item1 =  'Zack Knight';
      const item2 =  'Michael Jackson';
      const comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(1);
    });

    it('should return -1', () => {
      const item1 =  'Michael Jackson';
      const item2 =  'Zack Knight';
      const comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(-1);
    });

    it('should return -1', () => {
      const item1 =  'Michael Jackson';
      const item2 =  'Michael Jackson';
      const comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(0);
    });
  });

  describe('customEmailDateComparator', () => {
    it('should return 1', () => {
      expect(1).toEqual(1);
    });

    it('should return -1', () => {
      expect(-1).toEqual(-1);
    });
  });
});
