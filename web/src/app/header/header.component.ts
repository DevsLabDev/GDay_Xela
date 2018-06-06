import { Component, OnInit } from '@angular/core';
import { Menu } from '../entitys/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menu: Menu[] = [
    //{id: '#tg-schedule', nombre: 'Programa'},
    {id: '#tg-speakers', nombre: 'Speakers'},
    {id: '#tg-price', nombre: 'Precio'},
    {id: '#tg-venue', nombre: 'Locación'},
    {id: '#tg-sponsers', nombre: 'Patrocinio'}
  ];
  ngOnInit() {
  }
}
