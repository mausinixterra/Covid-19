import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidarCedulaService {

  constructor(
    private http: HttpClient,
  ) { }
  // documentType = 'CC';
  // documentNumber = '1143960862';

  getValidadcion( ) {
    const headers = new HttpHeaders({
      'x-Authorization': '1l1lu7xuzipjsis3acp4fc7c9h59s1s1i0fkw07e9lvbg7nl',
      'Content-Type': 'application/x-www-form-urlencoded',
      'data-urlencode': 'documentType=CC&documentNumber=1032440675'
    });

    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.misdatos.com.co/api/co/consultarNombres',  { headers });
  }
}
