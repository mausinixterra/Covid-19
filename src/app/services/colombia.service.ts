import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColombiaService {

  constructor( private http: HttpClient ) { }

  obtenerCasosColombia() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://www.datos.gov.co/resource/gt2j-8ykr.json`);
  }
}
