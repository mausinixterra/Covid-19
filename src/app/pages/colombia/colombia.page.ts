import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.page.html',
  styleUrls: ['./colombia.page.scss'],
})
export class ColombiaPage implements OnInit {

  colombia: any = null;

  constructor(
    private globalService: GlobalService
  ) {
    this.globalService.obtenerColombia().subscribe( ( resp ) => {
      this.colombia = resp;
    });
  }

  ngOnInit() {
  }

}
