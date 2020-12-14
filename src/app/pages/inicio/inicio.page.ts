import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuController, NavController } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;


  constructor(
              private iab: InAppBrowser,
              private menuCtrl: MenuController,
              private globalService: GlobalService,
              private navCtrl: NavController ) { }

  ngOnInit() {

    this.componentes = this.globalService.getMenuOpts();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  abrirQuees() {
    this.navCtrl.navigateBack('/quees');
  }

  abrirLimpieza() {
    // tslint:disable-next-line: max-line-length
    const browser = this.iab.create( 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/limpieza-desinfeccion-vivienda-c.pdf', '_system');
  }

  abrirPrevencion() {
    // tslint:disable-next-line: max-line-length
    const browser = this.iab.create( 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/medidas-prevencion-salir-entrar-vivienda-c.pdf', '_system');
  }

  abrirVehiculo() {
    // tslint:disable-next-line: max-line-length
    const browser = this.iab.create( 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/medidas-usuarios-vehiculo-particular-moto-bicicletas-c.pdf', '_system');
  }

  abrirDiscapacitados() {
    // tslint:disable-next-line: max-line-length
    const browser = this.iab.create( 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/medidas-usuarios-vehiculo-particular-moto-bicicletas-c.pdf', '_system');
  }

}
