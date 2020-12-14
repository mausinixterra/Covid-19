import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private globalService: GlobalService ) { }

  ngOnInit() {
    this.componentes = this.globalService.getMenuOpts();
  }

}
