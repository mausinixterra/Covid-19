import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const apiKey = environment.apiKey;
const apiUlr = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor( private http: HttpClient ) { }


  private ejecutarQuery<T>( query: string ) {

    query = apiUlr + query;

    return this.http.get<T>( query, { headers } );

  }


  getTopHeadlines() {

    this.headlinesPage++;
    // tslint:disable-next-line: max-line-length
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?language=es&q=coronavirus&q=covid-19&page=${ this.headlinesPage }`);
  }

  getTopHeadlinesCategoria( categoria: string ) {

    if ( this.categoriaActual === categoria ) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    // tslint:disable-next-line: max-line-length
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?q=coronavirus&q=covid-19&category=${ categoria }&page=${ this.categoriaPage }`);


  }

}
