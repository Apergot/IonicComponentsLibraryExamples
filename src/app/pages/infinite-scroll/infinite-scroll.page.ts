import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  /*To use html content we need to use viewchild */
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data : any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(evt){
    console.log('cargando siguientes....');

    setTimeout(()=>{

      if(this.data.length > 50){
        evt.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const newArray = Array(20);
      this.data.push(...newArray);
      evt.target.complete();
    },1000);
  }
}
