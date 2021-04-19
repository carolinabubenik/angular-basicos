import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbx.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  @Input() data : Personaje[] = [];

}
