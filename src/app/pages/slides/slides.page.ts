import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/virus.svg',
      titulo: 'El Virus',
      desc: 'Es un Coronavirus, el cual causa diversas afecciones, como el resfriado común.'
      // desc: 'Es una enfermedad infecciosa causada por un nuevo virus que no había sido detectado en humanos.'
    },
    {
      img: '/assets/slides/covid-19.svg',
      titulo: 'Covid-19',
      desc: 'Es una enfermedad respiratoria como la gripe (influenza) con diversos síntomas (tos, fiebre, etc.).'
    },
    {
      img: '/assets/slides/lavandose-las-manos.svg',
      titulo: 'Lava tus manos',
      desc: 'Es la mejor manera que tenemos para combatir el Covid-19.'
    },
    {
      img: '/assets/slides/desinfectante.svg',
      titulo: 'No olvides',
      desc: 'Usar jabón para lavar tus manos y usar desinfectante por si no te las has lavado.'
    },
    {
      img: '/assets/slides/casa.svg',
      titulo: 'Recuerda',
      desc: 'Quedandote en casa, te cuidas tu, y cuadas a los demas, seprados pero juntos.'
    }
  ];

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/inicio');

  }

}
