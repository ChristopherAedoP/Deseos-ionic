import { ListaDeseosService } from './../../app/services/lista-deseos.service';

import { ListaItem } from './../../app/clases/lista-item';
import { Lista } from './../../app/clases/listas';

import { Component, OnInit } from '@angular/core';

import { AlertController , NavController } from 'ionic-angular';


@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {
  nombreLista:string="";
  nombreItem:string="";
  items:ListaItem[]=[];

  constructor(public alertCtrl: AlertController,
              public NavCtrl:NavController,
              public _ListaDeseosService:ListaDeseosService) {

  }

  ngOnInit() { }

  Agregar(){

    if ( this.nombreItem.length ==0 ){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item)
    this.nombreItem ="";
  }
  Eliminar ( index:number ){

    this.items.splice(index,1)

  }
  guardarLista(){
    if ( this.nombreLista.length ==0 ){
      let alert = this.alertCtrl.create({
        title: 'Nombre Lista',
        subTitle: 'Debe ingresar un nombre a la lista.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista=new Lista(this.nombreLista);
    lista.items =this.items;

    //this._ListaDeseosService.listas.push(lista);
    this._ListaDeseosService.agregarLista(lista);
    this.NavCtrl.pop();

  }
  showAlert() {

  }
}
