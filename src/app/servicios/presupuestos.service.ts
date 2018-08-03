import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'; // Para las peticiones http
//import 'rxj/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PresupuestosService {
  presURL = 'https://comprasapp-90e07.firebaseio.com/presupuestos.json'; // para guardar presupuestos database
  preURL = 'https://comprasapp-90e07.firebaseio.com/presupuestos/'; //para obtener presupuestos

  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto); // se pasa a string
    const headers = new Headers({ // se define la cabecera del envío
      'Content-Type': 'application/json'
    });
    return this.http.post( this.presURL, newpres, {headers}).map( res => {// devuelve un objeto res
      console.log(res.json());
      return res.json();
    });
  }

  getPresupuestos() {
    return this.http.get(this.presURL)
      .map(res => res.json());
  }

  getPresupuesto( id$: string ) { // se recibe como parámetro la id del registro a recuperar de la base de datos 
    const url = `${this.preURL}/${id$}.json`; // url compuesta por la dirección del nodo más la id del registro a modificar
    console.log(this.http.get( url )
    .map(
      res => res.json()));
    return this.http.get( url )
    .map(
      res => res.json());
  }

  putPresupuesto(presupuesto:any, id$: string) { // Recibimos dos parámetros del componente, el objeto presupuesto y su id
    const newpre = JSON.stringify(presupuesto); // El objeto recibido se pasa a string
    const headers = new Headers({'Content-Type': 'aplication/json'});

    const url = `${ this.preURL }/${ id$ }.json`;

    return this.http.put( url, newpre, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    });

  }

  delPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url)
      .map(res => res.json());
  }

  constructor(private http: Http) {} // Llamada http de Angular

}
