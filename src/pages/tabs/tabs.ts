import { TerminadosComponent } from './../terminados/terminados.component';
import { PendientesComponent } from './../pendientes/pendientes.component';

import { Component } from '@angular/core';





@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;


  constructor() {

  }
}
