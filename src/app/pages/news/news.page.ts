import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  noticias: Article[] = [];
  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {
    this.noticiasService.getTopHeadlines()
    .subscribe( resp => {
      console.log('noticias', resp);
      this.noticias.push( ...resp.articles );
    });
  }

}
