import { Component, OnInit } from '@angular/core';

import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any;
  // Implementaci�n del servicio mediante su inicializaci�n en el constructor y la llamada a su m�totdo
  constructor(private proveedorService: ProveedoresService) { }

  // Inyecci�n del servicio
  ngOnInit() {
    this.proveedores = this.proveedorService.getProveedores();
  }

}
