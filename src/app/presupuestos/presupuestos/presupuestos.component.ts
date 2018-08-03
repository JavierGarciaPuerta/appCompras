import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  constructor(private presupuestosService: PresupuestosService) {
    // Como este método nos devuelve un objeto con todos los presupuestos en el
    // formato de Firebase, lo iteramos con un for para convertirlo en objetos
    // individuales con una id.
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      })
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delPresupuesto(id$)
      .subscribe(res => {
        this.presupuestos = [];
        this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
          for (const id$ in presupuestos) {
            const p = presupuestos[id$];
            p.id$ = id$;
            this.presupuestos.push(presupuestos[id$]);
          }
        });
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
