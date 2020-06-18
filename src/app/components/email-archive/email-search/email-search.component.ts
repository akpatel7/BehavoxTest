import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email-search',
  templateUrl: './email-search.component.html',
  styleUrls: ['./email-search.component.css']
})
export class EmailSearchComponent {

  filterText = '';

  @Output() customFilterChanged = new EventEmitter<string>();

  customFilterChangeValue($event) {
    console.log('changed', $event.target.value);
    this.customFilterChanged.emit($event.target.value);
  }

  clearFilter() {
    this.filterText = '';
    this.customFilterChanged.emit(this.filterText);
  }
}
