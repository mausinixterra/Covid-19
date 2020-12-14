import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-news-globales',
  templateUrl: './news-globales.page.html',
  styleUrls: ['./news-globales.page.scss'],
})
export class NewsGlobalesPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  dato = ['negocios', 'entretenimiento', 'general', 'salud', 'ciencia', 'deportes', 'tecnología'];

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology', ];

  noticias: Article[] = [];


  constructor( private noticiasService: NoticiasService ) {

  }


  ngOnInit() {
    this.segment.value = this.categorias[0];

    this.cargarNoticias( this.categorias[0] );
  }

  cambioCategoria( event ) {

    this.noticias = [];

    this.cargarNoticias( event.detail.value );

  }

  cargarNoticias( categoria: string, event? ) {

    this.noticiasService.getTopHeadlinesCategoria( categoria )
          .subscribe( resp => {
            // console.log(resp);
            this.noticias.push( ...resp.articles );

            if ( event ) {
              event.target.complete();
            }
          });
  }

  loadData( event ) {

    this.cargarNoticias( this.segment.value, event );

  }

}
