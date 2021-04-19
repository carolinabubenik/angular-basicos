import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbx.interface';
import { PersonajesComponent } from '../personajes/personajes.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

 @Input() nuevo : Personaje = {nombre:'', poder:0} ;
 @Input() personajes : Personaje[] = [];

 agregar( ) {

  if (this.nuevo.nombre.trim().length === 0) {
    return;
  } 
  this.personajes.push(this.nuevo);
  console.log('Agregado: ' + this.nuevo.nombre + ' - ' + this.nuevo.poder); // + 
  this.nuevo = {nombre : "", poder : 0};
  console.log( this.nuevo); // 'Limpiado: ' +
}

}
