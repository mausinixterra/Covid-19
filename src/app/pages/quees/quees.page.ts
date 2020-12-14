import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-quees',
  templateUrl: './quees.page.html',
  styleUrls: ['./quees.page.scss'],
})
export class QueesPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async abrirModal() {

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        titulo: '¿Qué es un coronavirus?',
        // tslint:disable-next-line: max-line-length
        descripcion: 'Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19. La COVID-19 es la enfermedad infecciosa causada por el coronavirus que se ha descubierto más recientemente. Tanto el nuevo virus como la enfermedad eran desconocidos antes de que estallara el brote en Wuhan (China) en diciembre de 2019.'
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
  }

  async abrirModal2() {

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        titulo: '¿Cuáles son los síntomas?',
        // tslint:disable-next-line: max-line-length
        descripcion: 'Los síntomas más comunes de la COVID-19 son fiebre, cansancio y tos seca. Algunos pacientes pueden presentar dolores, congestión nasal, rinorrea, dolor de garganta o diarrea. Estos síntomas suelen ser leves y aparecen de forma gradual. Algunas personas se infectan pero no desarrollan ningún síntoma y no se encuentran mal. La mayoría de las personas (alrededor del 80%) se recupera de la enfermedad sin necesidad de realizar ningún tratamiento especial. Alrededor de 1 de cada 6 personas que contraen la COVID-19 desarrolla una enfermedad grave y tiene dificultad para respirar. Las personas mayores y las que padecen afecciones médicas subyacentes, como hipertensión arterial, problemas cardiacos o diabetes, tienen más probabilidades de desarrollar una enfermedad grave. En torno al 2% de las personas que han contraído la enfermedad han muerto. Las personas que tengan fiebre, tos y dificultad para respirar deben buscar atención médica.'
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
  }

  abrirCuidados() {
    this.navCtrl.navigateBack('/cuidados');
  }

}
