import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuidados',
  templateUrl: './cuidados.page.html',
  styleUrls: ['./cuidados.page.scss'],
})
export class CuidadosPage implements OnInit {

  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }
  ngOnInit() {
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        // tslint:disable-next-line: triple-equals
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
