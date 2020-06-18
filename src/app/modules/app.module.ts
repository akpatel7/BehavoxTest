import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from '../components/app/app.component';
import { EmailArchiveComponent } from '../components/email-archive/email-archive/email-archive.component';
import { EmailDetailComponent } from '../components/email-archive/email-detail/email-detail.component';
import { EmailSearchComponent } from '../components/email-archive/email-search/email-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailArchiveComponent,
    EmailDetailComponent,
    EmailSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule, // importing the filter package here
    NgxPaginationModule, // importing the pagination package here,
    OrderModule // importing the sorting package here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
