import { Component } from '@angular/core';

import { EMAILS } from '../data/emails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email Archive Viewer';

  //filter
  customFilter: string = '';
  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;

  emails = [
    {
      "_id": "5ee83c8f4bc99b8895c8cf4e",
      "index": 0,
      "guid": "b41e3bbc-b1d1-4bde-9e6c-66cb6acd5ffd",
      "name": {
        "first": "April",
        "last": "Hartman"
      },
      "email": "april.hartman@behavox.com",
      "subject": "Latest Tech",
      "date": "Thursday, June 13, 2019 12:22 AM",
      "body": "Commodo duis consequat ad ullamco cillum id anim elit labore laboris officia. Consectetur ut nostrud enim dolore. Ea mollit aliqua esse excepteur culpa nostrud ullamco ex. Dolore quis qui ex laboris consequat occaecat cupidatat proident officia ut esse aliqua."
    },
    {
      "_id": "5ee83c8f0d4895bf92b0bc14",
      "index": 1,
      "guid": "0f6a0210-caba-41a5-8288-852fc5ebfaa0",
      "name": {
        "first": "Aurora",
        "last": "Bennett"
      },
      "email": "aurora.bennett@behavox.com",
      "subject": "Hi",
      "date": "Saturday, February 28, 2015 8:28 AM",
      "body": "Consectetur officia consectetur veniam nisi consequat amet anim aliqua in adipisicing tempor. Velit officia quis est Lorem voluptate ea do incididunt mollit dolore. Amet deserunt exercitation do in esse veniam duis. Laborum nisi dolore aliquip do laborum sint amet laboris aute fugiat. Nostrud labore laboris nulla mollit mollit in."
    },
    {
      "_id": "5ee83c8f573c2d413fd77aed",
      "index": 2,
      "guid": "633fe0e4-87d8-486b-9bc4-3e46160ada35",
      "name": {
        "first": "Alice",
        "last": "Simpson"
      },
      "email": "alice.simpson@behavox.com",
      "subject": "Charity run",
      "date": "Sunday, February 9, 2020 12:21 AM",
      "body": "Proident cillum voluptate irure proident ullamco. Proident proident quis nulla sit velit consectetur in. In cillum ea ex velit officia tempor laborum consequat elit. Elit ex dolor Lorem magna irure cillum sint est cupidatat ad adipisicing fugiat. Mollit Lorem laboris magna ea consequat do sunt elit labore et ea voluptate laboris ex. Proident minim aliquip consequat officia fugiat officia velit consequat tempor esse laborum. Nostrud qui consectetur aliqua duis exercitation proident nulla."
    },
    {
      "_id": "5ee83c8f8c64956c5c6b4946",
      "index": 3,
      "guid": "3bd1b07e-c456-4cbd-9621-3cd6cb484228",
      "name": {
        "first": "Kerri",
        "last": "Abbott"
      },
      "email": "kerri.abbott@behavox.com",
      "subject": "Urgent: Memo",
      "date": "Thursday, August 9, 2018 3:16 AM",
      "body": "Voluptate laboris consectetur in tempor pariatur minim est do ea id. Adipisicing occaecat labore eiusmod sit reprehenderit id nisi excepteur veniam. Magna officia magna ullamco aliquip consequat incididunt commodo aliquip sunt laboris magna labore. Nulla Lorem adipisicing quis tempor sint aliqua reprehenderit consequat. Ut sint et laborum in aliquip veniam veniam quis tempor mollit dolore."
    },
    {
      "_id": "5ee83c8f670afcc3f8ffb839",
      "index": 4,
      "guid": "6388c38f-99a4-4575-a70d-f0dd2cd7f5cf",
      "name": {
        "first": "Susan",
        "last": "Schroeder"
      },
      "email": "susan.schroeder@behavox.com",
      "subject": "Hockey team",
      "date": "Wednesday, December 7, 2016 4:29 PM",
      "body": "Consectetur aliquip pariatur et sit ea incididunt aliquip. Pariatur non voluptate sit laborum sit cupidatat labore exercitation veniam proident anim. Cillum est consectetur eu ullamco cupidatat ad officia officia. Tempor est ex tempor labore Lorem ad velit reprehenderit ut non ipsum."
    }
  ]
}
