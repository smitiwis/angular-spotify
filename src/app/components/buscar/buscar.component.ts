import { Component } from '@angular/core';
import { SpotyServisService } from '../../servicio/spoty-servis.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  {
  buscarArray:any = [];


  constructor(private _servicio:SpotyServisService) {}

   buscar(palabra){
      this._servicio.getBuscar(palabra).subscribe(busqueda => {
        this.buscarArray = busqueda.artists.items;
       console.log(busqueda.artists.items)
      });

   }
  

}
