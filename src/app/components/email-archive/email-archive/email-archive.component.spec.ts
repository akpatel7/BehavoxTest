import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPipe } from 'ngx-order-pipe';

import { EmailArchiveComponent } from './email-archive.component';

@Component({
  selector: 'app-email-search',
  template: '<p>Mock Email Search Component</p>'
})
class MockEmailSearchComponent{}

@Component({
  selector: 'app-email-detail',
  template: '<p>Mock Email Detail Component</p>'
})
class MockEmailDetailComponent {
  public emails: any[];
  public filter: string;
  public reverseNames: boolean;
  public  reverseDates: boolean;
  public sortBy: string;
}

describe('EmailArchiveComponent', () => {
  let component: EmailArchiveComponent;
  let fixture: ComponentFixture<EmailArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailArchiveComponent,
        MockEmailSearchComponent,
        MockEmailDetailComponent
      ],
      providers: [
        OrderPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
