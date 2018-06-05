import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import {Sponsor} from '../entitys/sponsor';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors: Observable<Sponsor[]>;

  constructor(db: AngularFireDatabase) {
    this.sponsors = db.list<Sponsor>('sponsors').valueChanges();
   }

  ngOnInit() {
  }

}
