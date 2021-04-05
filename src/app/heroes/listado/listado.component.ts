import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
// import { Console } from 'node:console';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando');
    this.heroeBorrado = this.heroes.pop() || '';
    console.log('Longitud: ' + this.heroes.length);
    console.log('Heroe borrado:' + this.heroeBorrado);
  } 
}
