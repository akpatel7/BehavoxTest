import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderPipe } from 'ngx-order-pipe';

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy'})
class MockPipe implements PipeTransform {
    transform(value: number): number {
        // blah blah
        return value;
    }
}


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2SearchPipeModule,
        NgxPaginationModule
      ],
      declarations: [
        AppComponent,
        MockPipe
      ],
      providers: [
        OrderPipe
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Email Archive Viewer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Email Archive Viewer');
  });
});


