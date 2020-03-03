import { Component } from '@angular/core';
import { SpotyServisService } from '../../servicio/spoty-servis.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  {
  cargar:boolean;
  buscarArray:any = [];
  artists:any  = "artists";

  constructor(private _servicio:SpotyServisService) {}

   buscar(palabra){
      this._servicio.getBuscar(palabra).subscribe((busqueda:any) => {
        this.cargar = true;
        this.buscarArray = busqueda.artists.items;
       // this.cargar = false;
       console.log(busqueda.artists.items)
      });

   }
  

}
