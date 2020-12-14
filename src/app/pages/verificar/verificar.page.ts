import { Component, OnInit } from '@angular/core';
// import { ValidarCedulaService } from 'src/app/services/validar-cedula.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.page.html',
  styleUrls: ['./verificar.page.scss'],
})
export class VerificarPage implements OnInit {
  resultado: number;
  diaSemana: string;
  digitosPermitidos: string;

  constructor(
    public http: HttpClient
    ) {
  }

  nombre: any = null;
  ultimoDigito: any = null;
  identificacion: string;
  fechaCompleta: string;
  fecha: string;
  now = new Date();

  permitido: string | number;


  obtenerFecha(numeroDiaSemana, diaMes, mes ) {
    numeroDiaSemana = numeroDiaSemana;

    // tslint:disable-next-line: triple-equals
    if ( numeroDiaSemana == 1 ) {
        this.diaSemana = 'Lunes';
        // tslint:disable-next-line: triple-equals
    } else if ( numeroDiaSemana == 2 ) {
        this.diaSemana = 'Martes';
        // tslint:disable-next-line: triple-equals
    } else if ( numeroDiaSemana == 3 ) {
        this.diaSemana = 'Miércoles';
        // tslint:disable-next-line: triple-equals
    } else if ( numeroDiaSemana == 4 ) {
        this.diaSemana = 'Jueves';
        // tslint:disable-next-line: triple-equals
    } else if ( numeroDiaSemana == 5 ) {
        this.diaSemana = 'Viernes';
        // tslint:disable-next-line: triple-equals
    } else if ( numeroDiaSemana == 6 ) {
        this.diaSemana = 'Sábado';
        // tslint:disable-next-line: triple-equals
    } else {
        this.diaSemana = 'Domingo';
    }

    // tslint:disable-next-line: triple-equals
    if ( mes == 0 ) {
        mes = 'Enero';
        // tslint:disable-next-line: triple-equals
    } else if ( mes == 1 ) {
      mes = 'Febrero';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 2 ) {
      mes = 'Marzo';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 3 ) {
      mes = 'Abril';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 4 ) {
      mes = 'Mayo';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 5 ) {
      mes = 'Junio';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 6 ) {
      mes = 'Julio';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 7 ) {
      mes = 'Agosto';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 8 ) {
      mes = 'Septiembre';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 9 ) {
      mes = 'Octubre';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 10 ) {
      mes = 'Noviembre';
    // tslint:disable-next-line: triple-equals
    } else if ( mes == 11 ) {
      mes = 'Diciembre';
    }

    // tslint:disable-next-line: no-unused-expression
    this.fecha = this.diaSemana + ', ' + diaMes + ' de ' + mes;

    return this.fecha;
  }


  ngOnInit() {
    this.fechaCompleta = this.obtenerFecha( this.now.getDay().toString(), this.now.getDate(), this.now.getUTCMonth() );
    this.permitido = 3;
  }

  validarPermiso( dia, digito ) {


    if ( dia == 'Lunes' ) {
      if ( digito == 0 || digito == 2 || digito == 4  || digito == 6 || digito == 8 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    } else if ( dia == 'Martes' ) {
      if ( digito == 1 || digito == 3 || digito == 5 || digito == 7 || digito == 9 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    } else if ( dia == 'Miércoles' ) {
      if ( digito == 0 || digito == 2 || digito == 4  || digito == 6 || digito == 8 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    } else if ( dia == 'Jueves' ) {
      if ( digito == 1 || digito == 3 || digito == 5 || digito == 7 || digito == 9 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    } else if ( dia == 'Viernes' ) {
      if ( digito == 0 || digito == 2 || digito == 4  || digito == 6 || digito == 8 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    } else if ( dia == 'Sábado' ) {
      if ( digito == 1 || digito == 3 || digito == 5 || digito == 7 || digito == 9 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    } else if ( dia == 'Domingo' ) {
      if ( digito == 0 || digito == 2 || digito == 4  || digito == 6 || digito == 8 ) {
        this.resultado = 1;
      } else {
        this.resultado = 0;
      }
    }

    return this.resultado;
  }

  numeroPermitido( dia ) {
    if ( dia == 'Lunes' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros pares';
    } else if ( dia == 'Martes' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros impares';
    } else if ( dia == 'Miércoles' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros pares';
    } else if ( dia == 'Jueves' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros impares';
    } else if ( dia == 'Viernes' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros pares';
    } else if ( dia == 'Sábado' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros impares';
    } else if ( dia == 'Domingo' ) {
      this.digitosPermitidos = 'Hoy tienen pico y cédula los numeros pares';
    }

    return this.digitosPermitidos;
  }

  sendPostRequest() {

    const myHeaders = new Headers();
    myHeaders.append('Authorization', '1l1lu7xuzipjsis3acp4fc7c9h59s1s1i0fkw07e9lvbg7nl');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('documentType', 'CC');
    urlencoded.append('documentNumber', this.identificacion);

    const data = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded
    };

    fetch('https://api.misdatos.com.co/api/co/consultarNombres', data)
      .then(response => response.json())
      .then(result =>  this.nombre = result.data.fullName.toLowerCase( ))
      .then(result => console.log(this.nombre))
      .catch(error => console.log('error', error));

    this.permitido = this.validarPermiso( this.diaSemana, this.identificacion.charAt(this.identificacion.length - 1) );
    this.digitosPermitidos = this.numeroPermitido( this.diaSemana );
  }
}



// if ( ( dia == 'Lunes' ) && ( digito == 1 || digito == 2 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }

// if ( ( dia == 'Martes' ) && ( digito == 3 || digito == 4 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }

// if ( ( dia == 'Miércoles' ) && ( digito == 5 || digito == 6 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }

// if ( ( dia == 'Jueves' ) && ( digito == 7 || digito == 8 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }

// if ( ( dia == 'Viernes' ) && ( digito == 9 || digito == 0 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }

// if ( ( dia == 'Sábado' ) && ( digito == 1 || digito == 3 || digito == 5 || digito == 7 || digito == 9 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }

// if ( ( dia == 'Domingo' ) && ( digito == 2 || digito == 4 || digito == 6 || digito == 8 || digito == 0 ) ) {
//   this.resultado = 1;
// } else {
//   this.resultado = 0;
// }