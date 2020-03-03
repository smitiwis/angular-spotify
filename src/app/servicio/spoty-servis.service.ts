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
      'Authorization' : 'Bearer BQC8WvJktFAAWdZPOmuKjHzDVVvq2Q2En1KcwRrCmsQu4hMfshBm4PcGvwW_ieB8cttf78GQ0mjoQzBCPds'
    });
    return this._http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }









  // https://api.spotify.com/v1/search?query=luis&type=artist&offset=0&limit=20
  getBuscar(palabrassss){
    
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQC8WvJktFAAWdZPOmuKjHzDVVvq2Q2En1KcwRrCmsQu4hMfshBm4PcGvwW_ieB8cttf78GQ0mjoQzBCPds'
    });
    
    return this._http.get(`https://api.spotify.com/v1/search?query=${ palabrassss }&type=artist&offset=0&limit=20`, {headers});

  }














}
