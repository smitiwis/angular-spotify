import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class SpotyServisService {



  constructor(private _http: HttpClient) {

  }




  getAlbums() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCArq-gcsZ_uSdXukQMXETxQzodLK3MV_dnT9F6k0uKVynpRmS7hcP7zuBSs-NWTryeiDl4L4bv__Vs2_8'
    });
    return this._http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }









  // https://api.spotify.com/v1/search?query=luis&type=artist&offset=0&limit=20
  getBuscar(palabrassss){
    
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDdGGNtc1b_7S4SevbYlmZeAz5ioN0uuXEj8fajHSCiu3bZkeTAuxZi4Y1YgU4PU4TZpFYVgZEsJM58gdg'
    });
    
    return this._http.get(`https://api.spotify.com/v1/search?query=${ palabrassss }&type=artist&offset=0&limit=20`, {headers});

  }














}
