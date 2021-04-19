import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbx.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  // styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre : 'Goku',
      poder: 15000
    },
    {
      nombre : 'Vegeta',
      poder: 7500
    }
  ]
  nuevo : Personaje = {
    nombre: 'Caro',
    poder: 99
  }



  // agregar( event: any ) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  // muevo el metodo Agregar al componente agregar

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

}
