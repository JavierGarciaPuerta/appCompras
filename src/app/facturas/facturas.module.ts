import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GuardService } from '../servicios/guard.service';
import { FacturasService } from '../facturas/servicios/facturas.service';

import { FacturasComponent } from './facturas/facturas.component'; // Permite que los componentes que creemos en nuestro nuevo m�dulo,
import { AddfactComponent } from './facturas/addfact/addfact.component';
// por defecto privados, puedas ser empleados en el �dulo ra�z en otros m�dulos

// Implementamos canActivate las rutas que necesitemos proteger en el array de rutas.
const routes: Routes = [
    { path: 'facturas', component: FacturasComponent, canActivate: [GuardService] },
    { path: 'addfact', component: AddfactComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [FacturasComponent, AddfactComponent],
  providers: [FacturasService]
})
export class FacturasModule { }
