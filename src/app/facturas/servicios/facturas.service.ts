import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class FacturasService {
  factsURL = 'https://comprasapp-90e07.firebaseio.com/facturas.json'; // para guardar facturas en la database
  factURL = 'https://comprasapp-90e07.firebaseio.com/facturas/';
  appComprasCore = 'http://localhost:8080/bill/add';
  appComprasCoreList = 'http://localhost:8080/bill/list';
  appComprasCoreDelete = 'http://localhost:8080/bill/delete';

  facturas: any = [
    {
      nombre: 'compra materiales oficina',
      precio: '100',
      iva: '14%',
      proveedor: 'Ficticio1'
    },
    {
      nombre: 'gastos de personal',
      precio: '340',
      iva: '14%',
      proveedor: 'Ficticio2'
    }
  ];

  postFactura(factura: any) {
    const newfact = JSON.stringify(factura); // para pasar el objeto Javascript en uno JSON
    // se define la cabecera del envio
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    // devuelve un objeto res
    console.log('PostFactura' + newfact);
    const resultado = this.http.post( this.appComprasCore, newfact, {headers}).map( res => {
      return res.json();
    });
    console.log('resuldado' + resultado );
    return resultado;
  }

  getFactura() {
    return this.facturas;
  }

  getFacturas() {
    return this.http.get(this.appComprasCoreList)
      .map(res => res.json());
  }

  delteFactura(Factura: any){
    return this.http.delete(this.appComprasCoreDelete, Factura)
      .map(res => res.json());
  }

  constructor(private http: Http) { } // Llamada http de Angular

}
