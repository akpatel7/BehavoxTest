import { TestBed } from '@angular/core/testing';
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
    it('should return a positive number', () => {
      let item1 =  'May 14, 2021 11:23 AM';
      let item2 =  'May 14, 2020 11:23 AM';
      let comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeGreaterThan(0);

      item1 =  'Thursday, May 14, 2020 11:23 AM';
      item2 =  'Saturday, April 9, 2016 9:15 PM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeGreaterThan(0);

      item1 =  'Wednesday, May 21, 2014 4:13 PM';
      item2 =  'Wednesday, May 21, 2014 4:12 PM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeGreaterThan(0);

      item1 =  'May 14, 2021';
      item2 =  'May 14, 2020';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeGreaterThan(0);
    });

    it('should be a negative number', () => {
      let item1 =  'May 14, 2020 11:23 AM';
      let item2 =  'May 14, 2021 11:23 AM';
      let comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeLessThan(0);

      item1 =  'Saturday, April 9, 2016 9:15 PM';
      item2 =  'Thursday, May 14, 2020 11:23 AM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeLessThan(0);

      item1 =  'Wednesday, May 21, 2014 4:12 PM';
      item2 =  'Wednesday, May 21, 2014 4:13 PM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeLessThan(0);

      item1 =  'May 14, 2020';
      item2 =  'May 14, 2021';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toBeLessThan(0);
    });

    it('should return 0', () => {
      let item1 =  'Thursday, May 14, 2020 11:23 AM';
      let item2 =  'Thursday, May 14, 2020 11:23 AM';
      let comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(0);

      item1 =  'Thursday, May 14, 2020';
      item2 =  'Thursday, May 14, 2020';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(0);

      item1 =  'May 14, 2020 11:23 AM';
      item2 =  'May 14, 2020 11:23 AM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(0);
    });

    it('should return NaN', () => {
      let item1 =  'DUMMY';
      let item2 =  'DUMMY';
      let comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);

      item1 =  '';
      item2 =  '';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);

      item1 =  'Thursday, May 14, 2020 11:23 AM';
      item2 =  'DUMMY';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);

      item1 =  '';
      item2 =  'Thursday, May 14, 2020 11:23 AM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);

      item1 =  'Thursday, May 14, 2020 11:23 AM';
      item2 =  'Thursday, May 14, 2020 11:23 MM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);

      item1 =  'Thursday, May 14, 2020 11:23 MM';
      item2 =  'Thursday, May 14, 2020 11:23 AM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);

      item1 =  'Thursday, May 14, 2020 13:23 AM';
      item2 =  'Thursday, May 14, 2020 11:23 AM';
      comparison = service.customEmailDateComparator(item1, item2);
      expect(comparison).toEqual(NaN);
    });
  });
});
