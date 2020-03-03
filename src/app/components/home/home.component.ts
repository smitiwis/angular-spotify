import { Component } from "@angular/core";
import { SpotyServisService } from "../../servicio/spoty-servis.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  cargar:boolean;
   infoArray:any = [];

  constructor(private _servicio:SpotyServisService) {
    this.cargar=true;
    this._servicio.getAlbums().subscribe((respuesta:any )=> {
      this.infoArray=respuesta.albums.items;
      this.cargar=false;

    });
  }

  




}
