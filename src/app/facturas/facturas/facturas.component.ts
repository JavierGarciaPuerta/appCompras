import { Component, OnInit, ViewChild } from '@angular/core';
import { FacturasService } from '../servicios/facturas.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  // @ViewChild('formfact') formfact: NgForm; // En la clase, a�adimos una vista en la que a�adir el objeto del formulario:
  facturas: Factura [] = [];

  constructor(private facturasService: FacturasService) { 
       this.facturasService.getFacturas()
      .subscribe(facturas => {
        for (const id$ in facturas) {
          const p = facturas[id$];
          console.log("p=>"+p.name$);
          p.id$ = id$;
          this.facturas.push(facturas[id$]);
        }
      });
   }

  ngOnInit() {
    // this.facturas = this.facturasService.getFacturas(); // se utiliza this.facturasService ya que se ha declarado en el constructor
  }

  deleteFactura(idFactura: any) {
    this.facturasService.delteFactura(idFactura).subscribe();
  }

}
