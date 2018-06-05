import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Speaker} from '../entitys/speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers: Observable<Speaker[]>;

  constructor( db: AngularFireDatabase ) {
    this.speakers = db.list<Speaker>('speakers').valueChanges();
  }

  ngOnInit() {
  }

}
