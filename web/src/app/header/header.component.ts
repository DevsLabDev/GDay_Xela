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
    {id: '#schedule', nombre: 'Programa'},
    {id: '#speakers', nombre: 'Speakers'},
    {id: '#price', nombre: 'Precio'},
    {id: '#venue', nombre: 'Locación'},
    {id: '#sponsor', nombre: 'Patrocinio'}
  ];
  ngOnInit() {
  }
}
