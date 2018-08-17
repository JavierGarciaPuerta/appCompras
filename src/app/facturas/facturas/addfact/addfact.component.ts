import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FacturasService } from '../../servicios/facturas.service';
import { ProveedoresService } from '../../../servicios/proveedores.service';

@Component({
  selector: 'app-addfact',
  templateUrl: './addfact.component.html',
  styleUrls: ['./addfact.component.css']
})
export class AddfactComponent implements OnInit {
  facturaForm: FormGroup;
  factura: any;
  facturaResp: any;
  proveedores: any[] = [];

  // Implementaci�n del servicio mediante su inicializaci�n en el constructor y la llamada a su m�totdo
  constructor(private pf: FormBuilder,
              private facturaService: FacturasService,
              private proveedoresService: ProveedoresService) {
    this.proveedores = this.proveedoresService.getProveedores();
  }

  saveFactura() {
    const savePresupuesto = {
      nombre: this.facturaForm.get('nombre').value,
      precio: this.facturaForm.get('precio').value,
      iva: this.facturaForm.get('iva').value,
      proveedor: this.facturaForm.get('proveedor').value
    };
    return savePresupuesto;
  }

  onSubmit() {
    this.factura = this.saveFactura();
    console.log(this.factura);
    // devuleve un objeto observable. Las clases de alto nivel se suscribir�n a esos obserbales y procesar�n la respuesta recibida
    // IMPORTANTE: La clase http no realiza la llamada hasta que alg�n consumidor se suscriba a la respuesta. Mientras tanto 
    // queda como una definici�n congelada.
    // El m�todo .subscribe() recibe como argumento un puntero a la respuesta http. Los datos se encuentran en formato JSON y hay que reclamarlos mediante el m�todo .json()
    this.facturaResp = this.facturaService.postFactura(this.factura)
      .subscribe(newfact => {
     });
    console.log('facturaResp=>' + this.facturaResp);
    this.facturaForm.reset();
  }

  ngOnInit() {
    this.facturaForm = this.pf.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      iva: ['', [ Validators.required]],
      proveedor: ['', Validators.required]
      });
  }
  
  

}
