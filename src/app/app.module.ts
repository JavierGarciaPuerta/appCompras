import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Para configurar las rutas de la aplicación.
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacturasModule } from './facturas/facturas.module'; // Nuevo módulo de facturas

import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { GuardService } from './servicios/guard.service';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
//import { FacturasComponent } from './facturas/facturas/facturas.component';

// Implementamos canActivate las rutas que necesitemos proteger en el array de rutas.
const routes: Routes = [
    { path: '', component: InicioComponent, canActivate: [GuardService] },
    { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
    { path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService] },
    { path: 'addpres', component: AddpresComponent, canActivate: [GuardService] },
    { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
    { path: 'editpres/:id', component: EditpresComponent, canActivate: [GuardService]},
//    { path: 'facturas', component: FacturasComponent, canActivate: [GuardService] },
    { path: 'registro', component: RegistroComponent },
    { path: 'iniciosesion', component: InisesComponent },
    { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
    // FacturasComponent; Como este componete ya está declarado en el módulo facturasModule,
    // que a su vez está importado en el módulo AppModule. No es necesario declararlo como componente en el módulo AppModule.
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule // Importamos el nuevo módulo de facturas.
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService,
    GuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
