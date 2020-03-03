import { Component } from "@angular/core";
import { SpotyServisService } from "../../servicio/spoty-servis.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
   infoArray:any = [];
  constructor(private _servicio:SpotyServisService) {
    this._servicio.getAlbums().subscribe(respuesta => {
      this.infoArray=respuesta.albums.items;
      console.log(this.infoArray);
    });
  }
}
