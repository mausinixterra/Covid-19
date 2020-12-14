import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(
    private http: HttpClient
    ) { }

  obtenerTodos() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  obtenerPaises() {
    return this.http.get(`${this.apiUrl}countries`);
  }

  obtenerColombia() {
    return this.http.get(`${this.apiUrl}countries/colombia`);
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
