import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Faq } from '../entitys/faq';
import { Question } from '../entitys/question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: Observable<Faq[]>;
  news: AngularFireList<Question>;
  uNombre: String;

  constructor(db: AngularFireDatabase) {
    this.faqs = db.list<Faq>('faq').valueChanges();
    this.news = db.list<Question>('pregunta');
  }

  ngOnInit() {
  }

  newQuestion(email: String, nombre: String, telefono: String, pregunta: String) {
    this.uNombre = nombre;
    this.news.push({
      email: email,
      nombre: nombre,
      telefono: telefono,
      pregunta: pregunta
    });
    setTimeout(function() {
      this.uNombre = null;
    }.bind(this), 5000);
  }

}
