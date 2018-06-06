import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
import { Registro } from '../entitys/registro';
import { tick } from '@angular/core/testing';
import { DatabaseReference } from 'angularfire2/database/interfaces';
import { Subscribe } from '@firebase/util';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  registros: AngularFireList<Registro>;
  db: AngularFireDatabase;
  registro: AngularFireList<any>;
  error: String;
  success: String;
  subscribe: Subscription;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.registros = db.list<Registro>('registro');
  }

  ngOnInit() {
  }

  addRegistro(nombre: String, email: String, telefono: String, ticket: string) {
    console.log(nombre, email, telefono, ticket);
    this.subscribe = this.db
    .list('registro', ref => ref.orderByChild('ticket').equalTo(ticket))
    .valueChanges()
    .subscribe(list => {
      this.subscribe.unsubscribe();
      console.log('Listado', list.length);
      if (list.length > 0 ) {
        this.error = ticket;
        setTimeout(() => {
          this.error = null;
        }, (10000));
      } else {
        this.registros.push({
          nombre: nombre,
          email: email,
          telefono: telefono, ticket: ticket
        }).then(res => {
          this.success = nombre;
          setTimeout(() => {
            this.success = null;
          }, 5000);
        });
      }
    });
  }

}
