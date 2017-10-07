import { Lista } from './../clases/listas';
import { Injectable } from '@angular/core';


@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    //  let lista1 = new Lista('Compra super') ;
    //  let lista2 = new Lista('juegos consola')
    //  let lista3 = new Lista('cosas de la casa')

    //  this.listas.push(lista1);
    //  this.listas.push(lista2);
    //  this.listas.push(lista3);

    this.cargarData();
     console.log("servicio iniciado")

  }

  actualizarData(){

    localStorage.setItem( "data" , JSON.stringify( this.listas)  )

  }

  cargarData(){
    if (localStorage.getItem( "data" )) {
      this.listas = JSON.parse(localStorage.getItem( "data" ));
    }

  }

  agregarLista(lista:Lista){

    this.listas.push(lista);
    this.actualizarData();
  }
  EliminarLista(idx:number){

        this.listas.splice(idx,1);
        this.actualizarData();
      }
}
