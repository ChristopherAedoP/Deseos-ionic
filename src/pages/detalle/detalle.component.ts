import { ListaItem } from './../../app/clases/lista-item';
import { Lista } from './../../app/clases/listas';
import { NavController , NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor(public NavCtrl:NavController,
              public NavPrms:NavParams,
              public _ListaDeseosService:ListaDeseosService,
              public alertCtrl:AlertController
             ) {

              console.log(this.NavPrms);

              this.idx = this.NavPrms.get("idx");
              this.lista = this.NavPrms.get("lista");
              }

  ngOnInit() { }

  actualizar(item:ListaItem){

    item.completado = !item.completado;
    let todosmarcados =true;

    for (let item of this.lista.items){
      if(!item.completado){
        todosmarcados=false;
        break;
      }
    }

    this.lista.terminada =todosmarcados;

    this._ListaDeseosService.actualizarData();

  }
  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'seguro de eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Agree clicked');
            this._ListaDeseosService.EliminarLista(this.idx);
            this.NavCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }
}
