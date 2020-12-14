import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {

  countries: any = null;
  searchCountry: any;


  constructor(
    private globalService: GlobalService
  ) {
    this.globalService.obtenerPaises().subscribe( ( resp ) => {
      this.countries = resp;
    });
  }

  ngOnInit() {
  }

}
