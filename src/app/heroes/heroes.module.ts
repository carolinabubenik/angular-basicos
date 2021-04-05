import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // aca van las cosas que queremos que sean accesibles desde afuera
        ListadoComponent
    ],
    imports: [ // aca solo van modulos
        CommonModule // Si no esta, no andan *ngFor y esos...
    ]
})
export class HeroesModule{

}