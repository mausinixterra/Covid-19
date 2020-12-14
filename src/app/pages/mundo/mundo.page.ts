import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.page.html',
  styleUrls: ['./mundo.page.scss'],
})
export class MundoPage implements OnInit {

  datosMundiales: any = null;

  constructor(
    private globalService: GlobalService
  ) {
    this.globalService.obtenerTodos().subscribe( ( resp ) => {
      this.datosMundiales = resp;
    });
  }

  ngOnInit() {
  }

}
