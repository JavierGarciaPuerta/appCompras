import { Component, OnInit } from '@angular/core';

import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any;
  // Implementación del servicio mediante su inicialización en el constructor y la llamada a su métotdo
  constructor(private proveedorService: ProveedoresService) { }

  // Inyección del servicio
  ngOnInit() {
    this.proveedores = this.proveedorService.getProveedores();
  }

}
