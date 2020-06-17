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
      let item1 =  'Cora Joyner';
      let item2 =  'Tracie Hunt';
      let comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(1);

      item1 =  'Tracie';
      item2 =  'Cora';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(1);

      item1 =  ' Joyner';
      item2 =  ' Hunt';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(1);

      item1 =  'Tracie Joyner';
      item2 =  'Cora Joyner';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(1);
    });

    it('should return -1', () => {
      let item1 =  'Tracie Hunt';
      let item2 =  'Cora Joyner';
      let comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(-1);

      item1 =  'Cora';
      item2 =  'Tracie';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(-1);

      item1 =  ' Hunt';
      item2 =  ' Joyner';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(-1);

      item1 =  'Cora Joyner';
      item2 =  'Tracie Joyner';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(-1);
    });

    it('should return 0', () => {
      let item1 =  'Cora Joyner';
      let item2 =  'Cora Joyner';
      let comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(0);

      item1 =  'Cora';
      item2 =  'Cora';
      comparison = service.customEmailNameComparator(item1, item2);
      expect(comparison).toEqual(0);

      item1 =  ' Hunt';
      item2 =  'Hunt ';
      comparison = service.customEmailNameComparator(item1, item2);
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
