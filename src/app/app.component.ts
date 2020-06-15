import { Component } from '@angular/core';

import { EMAILS } from '../data/emails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email Archive Viewer';

  emails = [
    {
      "_id": "5ee6bdbf16572c2fa788c313",
      "index": 0,
      "guid": "c62785f9-2e6e-438a-aabd-3a63e3585aeb",
      "name": "Lois Dickerson",
      "email": "loisdickerson@tribalog.com",
      "subject": "Latest Tech"
    },
    {
      "_id": "5ee6bdbf062af09a1a491052",
      "index": 1,
      "guid": "29568239-d8f8-44a8-9b0d-489df8f24e3a",
      "name": "Burton Farrell",
      "email": "burtonfarrell@tribalog.com",
      "subject": "Internal"
    },
    {
      "_id": "5ee6bdbf52f286b926308dc7",
      "index": 2,
      "guid": "b708f241-5a44-4323-93f4-23b9f8657518",
      "name": "Kristi Lloyd",
      "email": "kristilloyd@tribalog.com",
      "subject": "Behavox"
    },
    {
      "_id": "5ee6bdbf604bbad4cd4fff12",
      "index": 3,
      "guid": "f4c00b96-8a35-48a6-92a9-0161b281747c",
      "name": "Opal Simon",
      "email": "opalsimon@tribalog.com",
      "subject": "Latest Tech"
    },
    {
      "_id": "5ee6bdbfc2a73a6aa3e9f849",
      "index": 4,
      "guid": "4726dbf1-bb26-4a10-b34d-4d1a7d4aed36",
      "name": "Ortiz Mays",
      "email": "ortizmays@tribalog.com",
      "subject": "Hockey team"
    },
    {
      "_id": "5ee6bdbfc26185502434c564",
      "index": 5,
      "guid": "7b7bb8eb-c414-4300-b845-10b59a200fb8",
      "name": "Estrada Mendez",
      "email": "estradamendez@tribalog.com",
      "subject": "Internal"
    },
    {
      "_id": "5ee6bdbf61475f7c9345f9c4",
      "index": 6,
      "guid": "1725f30f-b1f0-490c-9f90-ea20ee89e1ba",
      "name": "Cote George",
      "email": "cotegeorge@tribalog.com",
      "subject": "Hi"
    },
    {
      "_id": "5ee6bdbf4ca235336be4563f",
      "index": 7,
      "guid": "be16d766-5e75-493f-8dab-198fbd64bc17",
      "name": "Moody Nguyen",
      "email": "moodynguyen@tribalog.com",
      "subject": "Dinner after work"
    },
    {
      "_id": "5ee6bdbf926859bec92ecca7",
      "index": 8,
      "guid": "d2ff9b6a-4acc-46ee-acb2-e3e627ee6440",
      "name": "Marylou Torres",
      "email": "maryloutorres@tribalog.com",
      "subject": "Dinner after work"
    },
    {
      "_id": "5ee6bdbf94906757465c1499",
      "index": 9,
      "guid": "18226725-80cf-440b-afb2-335deb7f69fb",
      "name": "Maggie Duran",
      "email": "maggieduran@tribalog.com",
      "subject": "Latest Tech"
    }];
}
