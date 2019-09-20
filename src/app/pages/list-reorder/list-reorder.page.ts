import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heroes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'WonderWoman']

  constructor() { }

  ngOnInit() {
  }

  reorder(evt){
    const itemMoving = this.heroes.splice(evt.detail.from, 1)[0];
    this.heroes.splice(evt.detail.to,0, itemMoving);
    evt.detail.complete();
  }

  onClick(){
    console.log(this.heroes);
  }
}
