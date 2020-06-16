import { Component } from '@angular/core';

import { OrderPipe } from 'ngx-order-pipe';

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
  order: string = 'name'; //set default
  reverse: boolean = false;
  //initializing pagination to page one
  p: number = 1;

  emails: any[] = 
  [
    {
      "_id": "5ee84b85306c8debd8e874e7",
      "index": 0,
      "guid": "7d9930ff-58ff-4398-a561-d2ec62a190bb",
      "name": {
        "first": "Robertson",
        "last": "White"
      },
      "email": "robertson.white@behavox.com",
      "subject": "Hockey team",
      "date": "Friday, August 31, 2018 4:07 AM",
      "body": "Velit qui consectetur nulla pariatur. Ipsum labore irure culpa enim aliquip commodo. Reprehenderit est id duis dolore et aliqua dolore incididunt cupidatat. Pariatur cupidatat tempor labore ipsum ad aute excepteur non in reprehenderit. Consequat in laborum mollit ullamco. Quis laborum fugiat qui ea esse cillum id ex sint mollit. Consequat minim duis nulla minim."
    },
    {
      "_id": "5ee84b85a355f20816536db7",
      "index": 1,
      "guid": "2792868a-bc6a-49cd-b034-24ccdb100a61",
      "name": {
        "first": "Giles",
        "last": "Sosa"
      },
      "email": "giles.sosa@behavox.com",
      "subject": "Charity run",
      "date": "Saturday, May 28, 2016 5:27 AM",
      "body": "Et sunt tempor aute anim do eiusmod voluptate. Elit id duis tempor elit ea veniam. Adipisicing mollit consequat voluptate magna et. Dolor elit pariatur ea Lorem aliqua officia laborum occaecat elit amet minim laboris irure do."
    },
    {
      "_id": "5ee84b85db824000560d0bf4",
      "index": 2,
      "guid": "d72aee52-1b51-471c-8a79-2bc7c9ff10c2",
      "name": {
        "first": "Lauren",
        "last": "Golden"
      },
      "email": "lauren.golden@behavox.com",
      "subject": "Hockey team",
      "date": "Sunday, February 26, 2017 6:32 PM",
      "body": "Exercitation cupidatat duis nostrud eu velit. Laboris eiusmod occaecat eu aliquip. Aute velit labore quis ex officia elit cillum adipisicing est adipisicing eiusmod enim deserunt fugiat. Mollit sit veniam esse minim duis eiusmod cillum proident anim ex non elit. In ullamco excepteur sint quis laborum nostrud cupidatat incididunt velit. Lorem mollit sint dolor sit sint dolor incididunt non velit sit officia exercitation."
    },
    {
      "_id": "5ee84b85c10720872f417826",
      "index": 3,
      "guid": "04711948-8d2b-49e3-a172-1849f1b5aa6a",
      "name": {
        "first": "West",
        "last": "Obrien"
      },
      "email": "west.obrien@behavox.com",
      "subject": "Latest Tech",
      "date": "Wednesday, June 6, 2018 8:28 PM",
      "body": "Consectetur eiusmod ullamco fugiat sint veniam adipisicing velit. Ad reprehenderit occaecat laboris consequat quis. Lorem magna reprehenderit nulla sint officia ullamco sit excepteur officia velit."
    },
    {
      "_id": "5ee84b85a80e43aa23bffb9f",
      "index": 4,
      "guid": "3bdcc154-6a3d-4720-a0d7-1a55cd2fe7de",
      "name": {
        "first": "Rochelle",
        "last": "Langley"
      },
      "email": "rochelle.langley@behavox.com",
      "subject": "Latest Tech",
      "date": "Thursday, January 15, 2015 6:58 PM",
      "body": "Aliqua esse ea consequat irure pariatur. Enim laborum anim esse minim eiusmod ea eiusmod labore et ad. Qui Lorem officia non ex duis commodo. Aute aliqua tempor voluptate aliquip dolore."
    },
    {
      "_id": "5ee84b85025861167c28babd",
      "index": 5,
      "guid": "93d04520-fa67-4c02-864b-faf63cd2a40d",
      "name": {
        "first": "Franco",
        "last": "Raymond"
      },
      "email": "franco.raymond@behavox.com",
      "subject": "Dinner after work",
      "date": "Wednesday, November 21, 2018 8:17 AM",
      "body": "Non commodo aute excepteur et excepteur non nostrud ea qui deserunt pariatur. Labore ea aliquip et fugiat. Fugiat adipisicing officia magna aliqua quis cupidatat laborum ipsum in exercitation duis quis duis. Amet duis et nulla veniam. Reprehenderit non do amet do laboris do sit esse in fugiat consectetur ea sint."
    },
    {
      "_id": "5ee84b859d95db80afe7463f",
      "index": 6,
      "guid": "811d188b-5203-4b0a-bf98-80c564d426f1",
      "name": {
        "first": "Kate",
        "last": "Thornton"
      },
      "email": "kate.thornton@behavox.com",
      "subject": "Internal",
      "date": "Friday, June 3, 2016 3:23 AM",
      "body": "Ea ad esse voluptate cupidatat minim aute quis pariatur. In elit nulla excepteur sit enim officia ad esse velit ex minim tempor fugiat ex. Sint culpa ea ut ea id reprehenderit officia minim fugiat. Anim dolor sunt nisi minim."
    },
    {
      "_id": "5ee84b85edf2bb7e6190e0b8",
      "index": 7,
      "guid": "6b545526-51ad-4436-8cba-c2ac8d50c8a3",
      "name": {
        "first": "Galloway",
        "last": "Guy"
      },
      "email": "galloway.guy@behavox.com",
      "subject": "Latest Tech",
      "date": "Thursday, May 19, 2016 11:35 PM",
      "body": "Enim laboris non fugiat culpa nisi occaecat ullamco aute eiusmod non enim do. Elit id est deserunt excepteur incididunt anim nostrud voluptate et in culpa proident reprehenderit. Consectetur sit Lorem consectetur quis tempor cupidatat culpa dolor. Magna est amet magna do adipisicing do consequat ipsum incididunt pariatur culpa adipisicing sunt tempor. Adipisicing cupidatat officia cupidatat mollit. Ex officia proident in velit sunt."
    }
  ];

  constructor(private orderPipe: OrderPipe) {
    this.emails = orderPipe.transform(this.emails, 'name.last+name.first');
    console.log(this.emails);
  }

  sortName() {
    this.order = 'name.last+name.first';
    this.reverse = !this.reverse;
  }
  sortDate() {
    this.order = 'date';
    this.reverse = !this.reverse;
  }

}
