import { Component } from '@angular/core';

import EMAILS from '../data/emails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emailArchiveViewer';

  emails = EMAILS;
}
