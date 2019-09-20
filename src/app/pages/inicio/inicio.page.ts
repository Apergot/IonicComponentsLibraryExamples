import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon: String,
  name: String,
  redirectTo: String
}
