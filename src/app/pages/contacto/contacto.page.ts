import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(
    private iab: InAppBrowser
  ) { }

  abrirEPS() {
    // tslint:disable-next-line: max-line-length
    const browser = this.iab.create( 'https://www.minsalud.gov.co/salud/publica/PET/Documents/coronavirus-telefonos-eps.pdf', '_system');
  }

  abrirSecretarias() {
    // tslint:disable-next-line: max-line-length
    const browser = this.iab.create( 'https://www.minsalud.gov.co/salud/publica/PET/Documents/coronavirus-telefonos.pdf', '_system');
  }

  ngOnInit() {
  }

}
