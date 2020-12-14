import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };


  constructor( public datalocalService: DataLocalService ) {

  }
  ngOnInit() {
  }


}
