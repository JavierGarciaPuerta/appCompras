import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;
  provincias: string[] = [
'�lava','Albacete','Alicante','Almer�a','Asturias','�vila','Badajoz','Barcelona',
'Burgos', 'C�ceres', 'C�diz','Cantabria','Castell�n','Ciudad Real','C�rdoba',
'La Coru�a','Cuenca','Gerona','Granada','Guadalajara',
'Guip�zcoa','Huelva','Huesca','IslasBaleares','Ja�n','Le�n','L�rida','Lugo',
'Madrid', 'M�laga','Murcia','Navarra','Orense','Palencia','Las Palmas',
'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
'Zamora','Zaragoza' ];

  constructor(private presupuestoService: PresupuestosService) { // Se a�ade el servicio al constructor.
    /*this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      telefono: null,
      email: '',
      contacto: ''
    };*/
   }

  onSubmit() {
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;
    /*this.presupuesto = this.savePresupuesto();
    this.presupuestoService.postPresupuesto(this.presupuesto).subscribe(newpres=>{})*/
    this.formpro.reset();
  }
  ngOnInit() {
  }

}
