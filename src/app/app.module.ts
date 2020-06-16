import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule, //importing the filter package here
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule //importing the pagination package here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
